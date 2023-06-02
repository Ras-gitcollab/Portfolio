function ExpCard(props) {
  return (
    <div style={{
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        margin:10,
        padding:10
        
    }}>

       <div style={{ backgroundColor: "#0047AB", color: "white" , borderRadius: "10px",padding:10}}>
       <h2>Walmart Global Tech India</h2>
      <h3><i>Software Developer Intern</i></h3>
      <p><i>Jan 2023 - Jun 2023</i></p>
       </div>

      <div>
      <ul>
        <li>
          <b>UI Design and Development:</b> I played a crucial role in designing and
          developing user interfaces for both mobile and web applications. By
          utilizing React and React Native, I created intuitive and visually
          appealing UIs that enhanced the overall user experience. This involved
          implementing responsive layouts, interactive elements, and smooth
          transitions.
        </li>
        <li>
          <b>Unit Testing for Functionality and Performance:</b> I wrote comprehensive
          unit test cases to ensure the functionality and performance of all UI
          components. By conducting thorough testing, I ensured that the UI
          elements functioned as intended and delivered optimal performance.
          This approach helped identify and address any potential bugs or
          issues, resulting in a more reliable and robust application.
        </li>
        <li>
          <b>Front-end Development, UI Design, and Testing Skills:</b> Throughout my
          internship, I showcased proficiency in front-end development, UI
          design, and testing. By applying my knowledge of React and React
          Native, I successfully bridged the gap between design and development,
          translating visual designs into functional interfaces. Additionally,
          my attention to detail and thorough testing approach demonstrated my
          commitment to delivering high-quality software.
        </li>
      </ul>
      </div>
    </div>
  );
}
export default ExpCard;
