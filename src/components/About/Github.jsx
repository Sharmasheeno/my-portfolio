
import GitHubCalendar from 'react-github-calendar';

function Github() {
  return (
    <div className="py-12">
      <h1 className="text-center text-4xl font-bold mb-8">Days I <strong className="text-purple-400">Code</strong></h1>
      <div className="flex justify-center">
        <GitHubCalendar
          username="Sharmasheeno"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
