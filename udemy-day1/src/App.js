import profile1 from "./images/profile1.jpg";
import profile2 from "./images/profile2.jpg";
import profile3 from "./images/profile3.jpeg";
import SingleComment from "./singleComment";

function App() {
  return (
    <div className="ui comments">
      <SingleComment 
        name="Alex"
        date="Today at 5:00 PM"
        comment="Lovely"
        profile={profile1}
      />
      <SingleComment 
        name="Sarah"
        date="Today at 5:00 PM"
        comment="Wow"
        profile={profile2}
      />
      <SingleComment 
        name="John"
        date="Today at 5:00 PM"
        comment="Thankx"
        profile={profile3}
      />
    </div>
  );
}

export default App;
