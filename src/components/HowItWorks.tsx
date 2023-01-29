import { Button, Modal } from "antd";

const howItWorks =
  'Our team built the website "Back of the Fridge" using React, Next.js, and Tailwind for the front end. Next.js allowed us to create a user-friendly interface and provided a smooth navigation experience for our users. For the backend, we chose to use Python and Flask. This combination allowed us to build a robust and scalable backend that could handle many requests. We also connected to the Cohere NLP API to process the input and output recipes. This API allowed us to quickly and easily extract the ingredients from the user\'s input and match them with the appropriate recipes from our database. On that note, we also used Firebase, namely Firestore, as a simple non-relational database. The combination of React, Next.js, Firebase, Tailwind, Python, Flask and the Cohere NLP API allowed us to build a powerful and efficient recipe website that is able to provide users with the recipes they are looking for quickly and easily.';

interface HowItWorksProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HowItWorks = ({ open, setOpen }: HowItWorksProps) => {
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      title="How it works"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Done
        </Button>,
      ]}
    >
      <p>{howItWorks}</p>
    </Modal>
  );
};

export default HowItWorks;
