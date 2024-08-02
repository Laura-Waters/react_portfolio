import Project from '../Project'
export default function Portfolio() {
    return (
      <div>
        <h2>Portfolio</h2>
      <div className='portfolio-container'>
        {/* weather dashboard */}
        <div>
        <Project
          title="Weather Dashboard"
          imageSrc="../images/gradient.jpg"
          projectLink="https://laura-waters.github.io/weather_dashboard/"
          githubLink="https://github.com/Laura-Waters/weather_dashboard"
        />
        </div>

        <div>
        <Project
          title="AppTrack"
          imageSrc="../images/gradient.jpg"
          projectLink="https://job-app-tracker-boic.onrender.com/"
          githubLink="https://github.com/Laura-Waters/AppTrack"
        />
        </div>
        <div>
        <Project
          title="Project Task Board"
          imageSrc="../images/gradient.jpg"
          projectLink="https://laura-waters.github.io/project_task_board/"
          githubLink="https://github.com/Laura-Waters/project_task_board"
        />
        </div>
        <div>
        <Project
          title="Employee Tracker"
          imageSrc="../images/gradient.jpg"
          projectLink="https://laura-waters.github.io/employee_tracker/"
          githubLink="https://github.com/Laura-Waters/employee_tracker"
        />
        </div>
        <div>
        <Project
          title="Text Editor PWA"
          imageSrc="../images/gradient.jpg"
          projectLink="https://text-editor-pwa-ssb6.onrender.com/"
          githubLink="https://github.com/Laura-Waters/text_editor_PWA"
        />
        </div>
        <div>
        <Project
          title="Note Taker"
          imageSrc="../images/gradient.jpg"
          projectLink="https://note-taker-emtn.onrender.com/"
          githubLink="https://github.com/Laura-Waters/note_taker"
        />
        </div>
      </div>
    </div>
    );
}