import React, {useState} from 'react';
import {Button, Modal} from 'antd';


const aboutUs = "Alex, Ari, Diego and Nika are a team participating " +
  "in McHacks 10, a hackathon event.They came together to " +
  "create a website that would help users find recipes based on the " +
  "ingredients they have on hand.The idea for the website came about " +
  "when Alex was feeling lazy and didn\'t want to go to the store, but still " +
  "wanted to make a dish with tzatziki, couscous and onions.He tried searching " +
  "online for a recipe, but couldn't find one that fit his specific ingredients. " +
  "That's when he decided to enter the ingredients into a language model like ChatGPT " +
  "and found a recipe that looked delicious.The team is now working on developing a " +
  "website that will make this process easier for others.";


interface AboutUsOverlayProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AboutUsOverlay = ({open, setOpen}: AboutUsOverlayProps) => {

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
      title="About Us"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Done
        </Button>
      ]}
    >
      <p>{aboutUs}</p>
    </Modal>
  );
};

export default AboutUsOverlay;