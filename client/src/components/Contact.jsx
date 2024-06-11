import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const openSmallWindow = () => {
    // Replace 'YOUR_EMAIL', 'SUBJECT_HERE', and 'BODY_HERE' with your specific values
    const email = encodeURIComponent(landlord.email);
    const subject = encodeURIComponent(`Regarding ${listing.name}`);
    const body = encodeURIComponent(message);

    // Construct the Gmail compose URL with parameters
    const composeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    // Calculate the center position
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowWidth = 1200; // Adjust the width as needed
    const windowHeight = 800; // Adjust the height as needed
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    // Open the new window in the center of the screen
    window.open(
      composeURL,
      "_blank",
      `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`
    );
  };

  /*
  the openSmallWindow function can be avoided if we use the below component however, the window size of the gmail will be full screen.
      <Link
        to={`https://mail.google.com/mail/?view=cm&fs=1&to=${landlord.email}&su=Regarding%20${listing.name}&body=${message}`}
         className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
      >
      Send Message
      </Link>
  */
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button
            onClick={openSmallWindow}
            className="text-stone-700 border-2 border-stone-700 text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </button>
        </div>
      )}
    </>
  );
}
