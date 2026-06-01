import { supabase, Course } from './lib/supabase';
import Sidebar from './components/Sidebar';
import HeroTile from './components/HeroTile';
import CourseCard from './components/CourseCard';
import ActivityTile from './components/ActivityTile';

async function getCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*');

    if (error) {
      console.log('Error:', error.message);
      return [];
    }

    return data || [];
  } catch (err) {
    console.log('Error fetching courses:', err);
    return [];
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
            
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  progress={course.progress}
                  iconName={course.icon_name}
                />
              ))
            ) : (
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700">
                <p className="text-gray-400">No courses found. Please add courses to your database.</p>
              </div>
            )}
            
            <ActivityTile />
          </div>
        </div>
      </main>
    </div>
  );
}