import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Cglia Solutions LLP · Hyderabad</h5>
              </div>
              <h3>2024–Now</h3>
            </div>
            <p>
               Analysed customer requirements and application workflows to design and deliver scalable, maintainable 
software solutions. 
• Developed and enhanced core features of the LARS product using Java, Spring MVC, Spring Boot, and RESTful 
APIs. 
• Implemented Email Send Configuration supporting both immediate email delivery and scheduled email 
execution using cron jobs. 
• Designed and implemented business rules in the service layer to ensure data integrity, validation, and application 
reliability. 
• Developed and consumed RESTful web service client integrations for  data exchange with  external systems. 
• Wrote and executed JUnit test cases to validate business logic, improve code coverage, and ensure application 
stability. 
• Authored Requirement Specification Documents (RSD) and High-Level Design (HLD) documents for new 
features and enhancements. 
• Performed code reviews to enforce coding standards, improve code quality, and follow best practices. 
• Managed production log monitoring, debugging, performance tuning, bug fixing, testing, and client support. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Development Intern</h4>
                <h5>CodeClause · Pune</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a time conversion application and a library book issue and
              return management system, applying core Java concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science</h4>
                <h5>Gandhian Engineering College · Bhubaneswar</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>Graduated June 2024 with a CGPA of 8.5.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
