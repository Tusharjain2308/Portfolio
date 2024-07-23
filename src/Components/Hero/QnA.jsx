import { PlaceholdersAndVanishInput } from "../ui/Form.jsx";
import useScrollToTop from "../../utils/scrolltotop.jsx";

export function Feedback() {
  useScrollToTop();
  const placeholders = [
    "What technologies were used to build this website?",
    "Do you have any feedback or suggestions to help me improve your experience on the website?",
    "What other skills or technologies are you proficient in?",
    "Are there any planned features or improvements for the website?",
    "What is your background and experience in web development?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Me Anything
      </h2>
      <p className="mb-4 text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base">
        Please enter your <strong>name</strong> and <strong>message</strong> below.
      </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
