import React, { useState } from "react";
import styles from "./ProfileCard.module.css";
import { BiArrowBack } from "react-icons/bi";
import { UserProfile } from "../../types/userProfile";
import { HiDotsVertical } from "react-icons/hi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdModeEditOutline } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCopy } from "react-icons/fa6";
interface UserProfileComponentProps {
  profile: UserProfile | null; // Allow null initially before data is fetched
}

const ProfileCard: React.FC<UserProfileComponentProps> = ({ profile }) => {
  const [openSettingPopup, setOpenSettingPopup] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!profile) {
    return <div>Loading...</div>; // Render loading state
  }

  console.log("Profile", profile);
  let firstProfile = profile[0];

  const settingHandler = () => {
    setOpenSettingPopup(!openSettingPopup);
  };
  console.log("asdasaa", openSettingPopup);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:4,
    width:'full',
    p: 2,
  };

  return (
    <div className={styles.profileCard}>
      <img
        src={firstProfile?.avatar}
        height={300}
        width={300}
        alt={profile[0]?.username}
      />
      <div className={styles.profileCardContent}>
        <h2>{firstProfile?.display_name?.text}</h2>
        <h6>California, CA</h6>
        {firstProfile.bio ? (
          <p>{firstProfile.bio}</p>
        ) : (
          <p>
            Renowned for their captivating performances and soulful melodies,{" "}
            {firstProfile?.display_name?.text} continues to enchant audiences
            worldwide.
          </p>
        )}
      </div>
      <div className={styles.profileCardTopBar}>
        <div>
          <BiArrowBack style={{cursor:"pointer"}} color="white" size={30} />
          <h5>Profile</h5>
          <Button onClick={handleOpen}>
            <HiDotsVertical color="white" size={30} />
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{display:'flex', alignItems:"center", gap:"10px"}} id="modal-modal-title" variant="h6" component="h2">
         <MdModeEditOutline size={25}/> Edit Profile
          </Typography>
          <Typography style={{display:'flex', alignItems:"center", gap:"10px"}} id="modal-modal-title" variant="h6" component="h5">
         <IoLogoWhatsapp size={23}/> Share On WhatsApp
          </Typography>
          <Typography style={{display:'flex', alignItems:"center", gap:"10px"}} id="modal-modal-title" variant="h6" component="h2">
         <FaCopy size={23}/> Copy Link
          </Typography>
         
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileCard;
