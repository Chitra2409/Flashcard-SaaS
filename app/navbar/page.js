"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import PremiumUpgradeModal from "../upgrade/page";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [openUpgradeModal, setOpenUpgradeModal] = useState(false);

  const handleOpenUpgrade = () => {
    setOpenUpgradeModal(true);
  };

  const handleCloseUpgrade = () => {
    setOpenUpgradeModal(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FBE5D5", // A slightly darker pastel background
          background: "linear-gradient(135deg, #FFFFFF, #FBCEB1)",
          boxShadow: "none", // Remove default shadow
          padding: "10px 24px", // Add padding for better spacing
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Brand/Logo */}
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "'Poppins', sans-serif", // Applying Poppins font here
              fontWeight: 700,
              color: "#5D4C46", // Darker text color for contrast
              letterSpacing: "1px",
            }}
          >
            <Image
              src="/logo3.webp"
              alt="logo"
              width={70}
              height={60}
              style={{ marginRight: "10px" }}
            />
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ color: "#5D4C46" }}>Insight</span>
              <span style={{ color: "#FF8B60" }}>Ink</span>
            </Link>
          </Typography>
          {/* Links and User Options */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SignedOut>
              <Link href="/sign-in">
                <Button
                  sx={{
                    color: "#5D4C46", // Consistent dark text color
                    marginRight: 2,
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "25px", // More rounded corners for a softer feel
                    padding: "8px 20px",
                    backgroundColor: "#FFD3B6", // Soft pastel background for button
                    ":hover": {
                      backgroundColor: "#FFB490", // Darker pastel orange on hover
                      color: "#FFF", // White text on hover for contrast
                    },
                  }}
                >
                  Login
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button
                  sx={{
                    color: "#FFF",
                    background: "linear-gradient(135deg, #FF8B60, #FF6F61)", // Matching button background color
                    padding: "8px 20px", // Larger padding for a more premium look
                    borderRadius: "25px", // More rounded corners
                    fontWeight: 500,
                    textTransform: "none",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // More defined shadow for depth
                    ":hover": {
                      backgroundColor: "#FF4F41", // Slightly darker hover effect
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/flashcards">
                <Button
                  sx={{
                    color: "#FFF",
                    background: "linear-gradient(135deg, #FF8B60, #FF6F61)", // Gradient for a modern touch
                    marginRight: 2,
                    padding: "8px 20px", // Larger padding
                    borderRadius: "25px", // Rounded corners
                    // border: "#FF4F41",
                    fontWeight: 500,
                    textTransform: "none",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // More defined shadow for depth
                    ":hover": {
                      backgroundColor: "#FF4F41", // Stronger hover effect
                    },
                  }}
                >
                  My Collection
                </Button>
              </Link>

              <Button
                onClick={handleOpenUpgrade}
                sx={{
                  color: "#FFF",
                  background: "linear-gradient(135deg, #FF8B60, #FF6F61)", // Gradient for a modern touch
                  marginRight: 2,
                  padding: "8px 20px", // Larger padding
                  borderRadius: "25px", // Rounded corners
                  fontWeight: 500,
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // More defined shadow for depth
                  ":hover": {
                    backgroundColor: "#FF4F41", // Stronger hover effect
                  },
                }}
              >
                Upgrade to Premium ✨
              </Button>
              <UserButton
                sx={{
                  marginLeft: 2,
                  padding: "4px", // Adding padding to UserButton for consistency
                  borderRadius: "50%",
                  ":hover": {
                    backgroundColor: "#FFD3B6", // Hover effect for user button
                  },
                }}
              />
            </SignedIn>
          </Box>
        </Toolbar>
      </AppBar>
      <PremiumUpgradeModal
        open={openUpgradeModal}
        handleClose={handleCloseUpgrade}
      />
    </>
  );
};

export default Navbar;
