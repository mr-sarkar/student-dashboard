import { supabase, Course, fallbackCourses } from './lib/supabase';
import Sidebar from './components/Sidebar';
import HeroTile from './components/HeroTile';
import CourseCard from './components/CourseCard';
import ActivityTile from './components/ActivityTile';

async function getCourses(): Promise<Course[]> {
  // If supabase client is not available, return fallback data
  if (!supabase) {
    console.log('Supabase client not configured, using fallback data');
    return fallbackCourses;
  }

  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*');

    if (error) {
      console.log('Error fetching courses:', error.message);
      return fallbackCourses;
    }

    if (data && data.length > 0) {
      return data;
    }
    
    return fallbackCourses;
  } catch (err) {
    console.log('Error:', err);
    return fallbackCourses;
  }
}

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-auto p-6 pb-20 md:pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HeroTile />
            
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
                iconName={course.icon_name}
              />
            ))}
            
            <ActivityTile />
          </div>
        </div>
      </main>
    </div>
  );
}