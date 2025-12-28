import Project from '../../components/Project';

export default () => {
  return (
    <main className="md:grid grid-cols-12 mx-auto w-5/6">
      <Project
      link='https://axxes-conference-tool.netlify.app/'
        projectName="industry Project"
        projectText="The second project for school and we had a beautiful project. we had the fun of making a project for Axxes. We made a conference tool whit a website and app. I was responsible for the backend and a part of the website and app."
        listTegnologys={[
          'React',
          'Typescript',
          'Tailwind',
          'React Router',
          'React Native',
          'Expo',
          'Dotnet',
          'C#',
          'Azure',
        ]}
        srcLink="projects/314shots_so_gio0nk.png"
        start="col-start-2"
        reverse="flex-row-reverse"
        alt="foto of portfolio"
      />
      <Project
        projectName="Portfolio"
        projectText="For Frontend Development class, we had to make a portfolio. Look how I managed."
        listTegnologys={['React', 'Typescript', 'Tailwind', 'React Router']}
        srcLink="projects/55shots_so_od46ig.png"
        start="col-start-1"
        alt="foto of portfolio"
      />
      <Project
        projectName="Car Sharing App"
        projectText="This is an app for people who share a car. To track the routes from the divrent drivers. So you can see how much you have to pay the owner."
        listTegnologys={['React Native', 'Expo', 'Dotnet', 'azure', 'C#']}
        srcLink="projects/218shots_so_qzudqb.png"
        start="col-start-2"
        reverse="flex-row-reverse"
        alt="foto of car sharing app"
      />
      <Project
        projectName="Interactive Poles"
        projectText="This was a project for Howest. My team created a game for all ages for a school. We printed poles and made them interactive with our software."
        listTegnologys={[
          'raspberry pi',
          'esp',
          'Python',
          'C++',
          'HTML',
          'CSS',
          'Javascript',
        ]}
        srcLink="projects/589shots_so_rfmyqd.jpg"
        start="col-start-1"
        alt="foto of interactive poles"
      />
      <Project
        projectName="Europe Population"
        projectText="I had to make a website for the Interaction Design course. The website compares the population of European countries."
        listTegnologys={['HTML', 'CSS', 'Javascript']}
        srcLink="projects/782shots_so_metlyd.png"
        link="https://delfossedoran.github.io/eindopdracht-Interaction/"
        start="col-start-2"
        reverse="flex-row-reverse"
        alt="foto of europe population"
      />
      <Project
        projectName="Project One"
        projectText="It was the first project I made: to monitor the gasoline consumption, speed and distance of our car."
        listTegnologys={['raspberry pi', 'Python', 'HTML', 'CSS', 'Javascript']}
        srcLink="projects/20220614_113446_hpiuhn.jpg"
        link="https://www.instructables.com/Project-One/"
        start="col-start-1"
        alt="foto of project one"
      />
    </main>
  );
};
