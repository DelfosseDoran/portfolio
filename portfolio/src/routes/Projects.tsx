import Project from '../components/Project';

export default () => {
  return (
    <main className="md:grid grid-cols-12 mx-auto w-5/6">
      <Project
        projectName="Portfolio"
        projectText="For Frontend Development class, we had to make a portfolio. So now
              you can see how I managed."
        listTegnologys={['React', 'Typescript', 'Tailwind', 'React Router']}
        srcLink=""
        start='col-start-1'
      />
      <Project
        projectName="Car Sharing App"
        projectText="This is an app for people who share a car. So they can see who has driven where. You can also see how much you have to pay the owner."
        listTegnologys={['React Native', 'Expo']}
        srcLink=""
        start='col-start-2'
        reverse='flex-row-reverse'
      />
      <Project
        projectName="Interactive Poles"
        projectText="This was a project for howest. For this, we had to create a game within a team for all ages. this consisted of hardware and software."
        listTegnologys={[
          'raspberrypi',
          'esp',
          'Python',
          'C++',
          'HTML',
          'CSS',
          'Javascript',
        ]}
        srcLink=""
        start='col-start-1'
      />
      <Project
        projectName="Europe Population"
        projectText="A website that I had to make for the Interaction Design course. I made a website where you can compare countries geographically."
        listTegnologys={['HTML', 'CSS', 'Javascript']}
        srcLink=""
        link="https://delfossedoran.github.io/eindopdracht-Interaction/"
        start='col-start-2'
        reverse='flex-row-reverse'
      />
      <Project
        projectName="Project One"
        projectText="The first Project I made. It was the first project I made it was a car monitor. you could see consumption, speed and distance."
        listTegnologys={['raspberrypi', 'Python', 'HTML', 'CSS', 'Javascript']}
        srcLink=""
        link="https://www.instructables.com/Project-One/"
        start='col-start-1'
      />
    </main>
  );
};
