import { ReactTyped } from "react-typed";

const Role = () => (
  <ReactTyped
    className="text-3xl sm:text-5xl text-role font-semibold"
    strings={[
      "Full Stack Developer",
      "Wev Developer",
      "Ui-Ux Designer",
      "Backend Developer",
      "Coder",
    ]}
    typeSpeed={60}
    backSpeed={50}
    loop
  />
);
export default Role;
