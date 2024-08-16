"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
//**TODO change the import */
// import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import {
    Card,
    CardActionArea,
    CardContent,
    Container,
    Grid,
    Typography, Slide
} from "@mui/material";

export default function FlashCards() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    // const [flashcardsDemo, setFlashcardsDEmo] = useState([
    //     { name: "Theme 1" },
    //     { name: "Theme 2" },
    //     { name: "Theme 3" },
    //     { name: "Theme 4" },
    //     { name: "Theme 5" },
    // ]);
    const router = useRouter();

    useEffect(() => {
        async function getFlashcards() {
          if (!user || !isSignedIn) return; // Handle case when user is not signed in
    
          try {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const flashcardsArray = querySnapshot.docs.map((doc) => doc.data().flashcardSets || []);
            setFlashcards(flashcardsArray.flat());
          } catch (error) {
            console.error('Error fetching flashcards:', error);
          }
        }
    
        getFlashcards();
      }, [user, isSignedIn]
    );

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }
    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`);
    };
    return (
        <Container width="100vw"  sx={{display:'flex', mt:10, flexDirection:'column', justifyContent:'center', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}} >
            <Typography variant="h3" gutterBottom sx={{ marginTop: 10, fontWeight:800,  borderBottom: '2px solid #333' }}>Saved Flashcards</Typography>
            <Grid container  sx={{ width:"100%", height:"100vh" ,  mt:4, justifyContent:'center'}}>
                {flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={index} sx={{
                        display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Slide direction={index % 2 === 0 ? 'right' : 'left'} in={true}>
                            <Card sx={{ minWidth: "350px", height: "130px", gap:2}}>
                                <CardActionArea
                                    onClick={() => {
                                        handleCardClick(flashcard.name);
                                    }}
                                >
                                    <CardContent sx={{
                                        //**TODO change color */
                                        background: "linear-gradient(to bottom, #FFCBA4, #FFE8D6)",
                                       
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      
                                    }}>
                                        <Typography variant="h6" sx={{ fontSize: "48px", fontWeight: 600 }}>{flashcard.name}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Slide>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}
