'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Head from "next/head"; 
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
        origin: "http://localhost:3000",
      },
    });
    const checkoutSessionJson = await checkoutSession.json();
    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });
    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <>
    
    
      <Box
        sx={{
          background: "linear-gradient(135deg, #FFFFFF, #FBCEB1)",
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#5D4C46',
          textAlign: 'left',
          position: 'relative',
          overflow: 'hidden',
          p: 4,
        }}
      >
        <AppBar position="absolute" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ color: '#5D4C46', fontWeight: 'bold' }}>
              InsightInk
            </Typography>
            <Box>
              <Button color="inherit" href= "/sign-in" sx={{ color: '#5D4C46', mr: 2 }}>Login</Button>
              <Button variant="contained" href="/sign-up" sx={{ bgcolor: '#FF9656', color: '#FFFFFF' }}>Sign Up</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ zIndex: 1, mt: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#5D4C46' }}>
                AI Flashcard Generator
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#5D4C46' }}>
              Instantly turn your PDFs, presentations, notes, and images into flashcards with InsightInk. Our AI quickly generates a complete set of flashcards in just seconds.              </Typography>
              <Button
                variant="contained"
                sx={{ bgcolor: '#FF9656', color: '#FFFFFF', py: 2, px: 4, mb: 2 }}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
      
            </Grid>
          </Grid>
        </Container>

        {/* Embedded SVG Wave */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 'auto',
          }}
        >
          <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", my: 0, bgcolor: '#FFFFFF', color: '#5D4C46', py: 4 }}>
      <Container maxWidth="lg" sx={{ zIndex: 1, mt: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#5D4C46' }}>
          Stop wasting time making flashcards.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          
          {/* Feature 1: Easy Text Input */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
          <Typography variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#5D4C46' }}>
          Smart Flashcards
          </Typography>
          <Typography align="left" sx={{ color: '#5D4C46', mt: 1, mb: 2 }}>
          Our AI-powered system intelligently breaks down your text into concise, focused flashcards. It highlights the most important concepts and key information, ensuring you spend your time reviewing what truly matters. This targeted approach makes your study sessions more effective and efficient.         
          </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image 
              src="/SmartFlashcards.jpg" 
              alt="Smart Flashcards"
              width={500}
              height={500}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          
          
          
          
          {/* Feature 3: Accessible Anywhere */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image 
              src="/AccessibleAnywhere.jpg" 
              alt="Accessible Anywhere"
              width={450}
              height={450}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
            <Typography variant="h5" align="left"  sx={{ fontWeight: 'bold', color: '#5D4C46'  }}>
              Accessible Anywhere
            </Typography>
            <Typography align="left" sx={{ color: '#5D4C46', mt: 1, mb: 2 }}>
            Your study materials are always within reach. With our platform, you can access your flashcards from any device, be it your phone, tablet, or computer. Whether you’re online or offline, you can continue studying wherever you are, making it easy to fit learning into your busy schedule.

</Typography>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
          <Typography variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#5D4C46' }}>
          File Formats supported
          </Typography>
          <Typography align="left" sx={{ color: '#5D4C46', mt: 1, mb: 2 }}>
          Easily create flashcards from a wide range of file formats, ensuring compatibility with your study materials. Whether you have PDFs, images, PowerPoints, or Word documents, our AI-powered flashcard generator seamlessly converts your content into well-structured flashcards.</Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image 
              src="/EasyTextInput.jpg" 
              alt="Easy Text Input"
              width={600}
              height={600}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
        </Container>
      </Box>
      <Box sx={{ textAlign: "center", py: 8, bgcolor: '#F7F8FA', background: "linear-gradient(135deg, #FFFFFF, #FBCEB1)" }}>
  <Container maxWidth="md">
    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#3D3E42' }}>
      AI Flashcard Generator
    </Typography>
    <Typography variant="body1" sx={{ color: '#3D3E42', mb: 6 }}>
    Getting ready for a test, exam, or quiz? InsightInk’s AI-powered flashcard maker converts your pictures, notes, PDFs, PowerPoints, and other documents into flashcards automatically. Just upload your materials, and our AI will generate your flashcards in seconds.
    </Typography>

    <Grid container spacing={4} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: '#FFFFFF', p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Image 
            src="/first.jpg" 
            alt="Step 1: Upload"
            width={200}
            height={300}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3D3E42', mt: 2 }}>
            Step 1: Upload file/Enter text
          </Typography>
          <Typography variant="body2" sx={{ color: '#3D3E42', mt: 1 }}>
            Enter text, upload a PDF, Doc or Txt, and let our AI make flashcards for you. It's free with no account required.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: '#FFFFFF', p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Image 
            src="/second.jpg" 
            alt="Step 2: Practice"
            width={400}
            height={600}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3D3E42', mt: 2 }}>
            Step 2: Click Generate
          </Typography>
          <Typography variant="body2" sx={{ color: '#3D3E42', mt: 1 }}>
            Generate your flashcards, review them,or save them. We support different file upload. 
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: '#FFFFFF', p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Image 
            src="/third.jpg" 
            alt="Step 3: Test Yourself"
            width={200}
            height={300}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3D3E42', mt: 2 }}>
            Step 3: Test Yourself
          </Typography>
          <Typography variant="body2" sx={{ color: '#3D3E42', mt: 1 }}>
            Once you've mastered your flashcards, enter exam mode. Test your knowledge and scrore well.
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <Typography variant="body2" sx={{ color: '#3D3E42', mt: 6 }}>
      Creating printable flashcards has never been easier. Choose single-sided for a quick cut and stick approach, or go with double-sided, which comes auto-aligned for your convenience.
    </Typography>
  </Container>
</Box>

      <Box sx={{ my: 8, textAlign: "center", px: 4, bgcolor: 'linear-gradient(135deg, #FFFFFF, #FBCEB1)', color: '#3D3E42', py: 4 }}>
  <Container>
  <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#5D4C46' }}>
          Pricing
        </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Card raised sx={{ borderRadius: 3, boxShadow: 3, bgcolor: '#FFFFFF' }}>
          <CardContent sx={{ textAlign: 'center', py: 4, borderRadius: 3 }}>
            <Typography variant="h6" component="div" sx={{ color: '#F9A826' }}>
              Basic
            </Typography>
            <Typography variant="h4" component="div" sx={{ my: 2, fontWeight: 'bold', color: '#2B2D42' }}>
              $0 / month
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#3D3E42' }}>
              No subscription required
            </Typography>
            <Box sx={{ my: 3 }}>
              <Typography sx={{ color: '#3D3E42' }}>✔ Three AI notes</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Five AI changes per note</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Text upload</Typography>
              <Typography sx={{ color: '#B2B2B2' }}>✘ No document upload</Typography>
              <Typography sx={{ color: '#B2B2B2' }}>✘ Queues during peak times</Typography>
              <Typography sx={{ color: '#B2B2B2' }}>✘ Limited new features</Typography>
            </Box>
            <Button variant="contained" disabled sx={{ mt: 4, bgcolor: '#E4E4E7', color: '#2B2D42' }}>
              Subscribe
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card raised sx={{ borderRadius: 3, boxShadow: 3, bgcolor: '#FFFFFF' }}>
          <CardContent sx={{ textAlign: 'center', py: 4, borderRadius: 3 }}>
            <Typography variant="h6" component="div" sx={{ color: '#F35A4A' }}>
              Annual
            </Typography>
            <Typography variant="h4" component="div" sx={{ my: 2, fontWeight: 'bold', color: '#2B2D42' }}>
              $3.99 / month
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#3D3E42' }}>
              Billed annually
            </Typography>
            <Box sx={{ my: 3 }}>
              <Typography sx={{ color: '#3D3E42' }}>✔ Unlimited AI notes/documents</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Unlimited AI changes</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Text upload</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ PDF, Word, and Txt upload</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Skip the queue</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ New features soon</Typography>
            </Box>
            <Button variant="contained" sx={{ mt: 4, bgcolor: '#F35A4A', color: '#FFFFFF' }}>
              Subscribe
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card raised sx={{ borderRadius: 3, boxShadow: 3, bgcolor: '#FFFFFF' }}>
          <CardContent sx={{ textAlign: 'center', py: 4, borderRadius: 3 }}>
            <Typography variant="h6" component="div" sx={{ color: '#6C63FF' }}>
              Monthly
            </Typography>
            <Typography variant="h4" component="div" sx={{ my: 2, fontWeight: 'bold', color: '#2B2D42' }}>
              $8.99 / month
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#3D3E42' }}>
              Billed monthly
            </Typography>
            <Box sx={{ my: 3 }}>
              <Typography sx={{ color: '#3D3E42' }}>✔ Unlimited AI notes/documents</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Unlimited AI changes</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Text upload</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ PDF, Word, and Txt upload</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ Skip the queue</Typography>
              <Typography sx={{ color: '#3D3E42' }}>✔ New features soon</Typography>
            </Box>
            <Button variant="outlined" sx={{ mt: 4, borderColor: '#6C63FF', color: '#6C63FF' }}>
              Subscribe
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
</Box>


      
    
    </>
  );
}
