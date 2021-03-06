import images from './assets/images'

const step1 = 'Step 1';
const step2 = 'Step 2';
const step3 = 'Step 3';
const step4 = 'Step 4';
const step5 = 'Step 5';
const step6 = 'Step 6';

export const data = [
    {
        id: 0,
        title:"Bluetooth-Controlled Car",
        text:"",
        purpose:"",
        backgroundImage: images.bcc_bg,
        steps:[{
            image: images.bc_step_1,
            title: "Step 1",
            text:"Ordering all parts",
            // arrowsOrSlides: '',
        },
        {
            image: images.bc_step_2,
            title:"Step 2",
            text:"Attaching wheels",
            // arrowsOrSlides: '',
        },
        {
            image: images.bc_step_3,
            title:"Step 3",
            text:"Connecting wires on the extension",
            // arrowsOrSlides: '',
        },
        {
            image: images.bc_step_4,
            title:"Step 4",
            text:"Combining the extension and uno",
            // arrowsOrSlides: '',
        },
        {
            image: images.bc_step_5,
            title:"Step 5",
            text:"adding the battery box",
            // arrowsOrSlides: '',
        },
        {
            image: images.bc_step_6,
            title:"Step 6",
            text:"Coding on Arduino",
            // arrowsOrSlides: '',
        },
        ],
        description:"This is a Blutooth-controlled toy car. You can control it by connecting it with your cellphone using Bluetooth.",
        whatHaveILearned:"The idea came to my mind after I fixed my cousin's RC car bought from market that was poor in quality. I wanted to make a car that is essentially easier to control (since it does not need a old-school controller) and more portable. Designing it and teaching my cousin how to do troubleshooting was a memorable part in this experience.",
        image1: images.bcc_1,
        image2: images.bcc_2,
        image3: images.bcc_3,
    },
      {
        id: 1,
        title:"Hand-controlled Car",
        text:"",
        purpose:"",
        backgroundImage: images.hcc_bg,
        actions:[{
            text:"",
            url:"",
            color:"",
        }],
        steps:[{
            image: images.hc_step_1,
            title:"Step 1",
            text:"Ordering all parts",
            // arrowsOrSlides: '',
        },
        {
            image: images.hc_step_2,
            title:"Step 2",
            text:"Attaching wheels and the motor module",
            // arrowsOrSlides: '',
        },
        {
            image: images.hc_step_3,
            title:"Step 3",
            text:"Connecting wires on two main boards",
            // arrowsOrSlides: '',
        },
        {
            image: images.hc_step_4,
            title:"Step 4",
            text:"Adding the battery box",
            // arrowsOrSlides: '',
        },
        {
            image: images.hc_step_5,
            title:"Step 5",
            text:"Connecting wires on the Transmitter",
            // arrowsOrSlides: '',
        },
        {
            image: images.hc_step_6,
            title:"Step 6",
            text:"Coding on Arduino",
            // arrowsOrSlides: '',
        },
        ],
        description:"This is an upgraded version of the Bluetooth-controlled car. For this RC car 2.0, you can control it by moving one of your hands (with a transmitter)in 4 directions, and the car will move according to your gesture.",
        whatHaveILearned:"The idea came from the inspiration that children do not always have access to phones. Therefore, this version allows children to control it using only their hands. It is more advanced and challenging because moving hands in different directions to control this car is a better illustration of interactions between humans and machines.",
        image1: images.hcc_1,
        image2: images.hcc_2,
        image3: images.hcc_3,
    },
      {
        id: 2,
        title:"Tesla Coil",
        text:"",
        purpose:"",
        backgroundImage: images.tc_bg,
        actions:[{
            text:"",
            url:"",
            color:"",
        }],
        steps:[{
            image: images.tc_step_1,
            title:"Step 1",
            text:"How it works",
            // arrowsOrSlides: '',
        },
        {
            image: images.tc_step_2,
            title:"Step 2",
            text:"Drawing the circuit diagram for the Tesla Coil",
            // arrowsOrSlides: '',
        },
        {
            image: images.tc_step_3,
            title:"Step 3",
            text:"Buying certain circuit elements",
            // arrowsOrSlides: '',
        },
        {
            image: images.tc_step_4,
            title:"Step 4",
            text:"Soldering",
            // arrowsOrSlides: '',
        },
        {
            image: images.tc_step_5,
            title:"Step 5",
            text:"Attching circuit elements",
            // arrowsOrSlides: '',
        },
        {
            image: images.tc_step_6, 
            title:"Step 6",
            text:"Attching the cylinder with coils",
            // arrowsOrSlides: '',
        },
        ],
        description:"This is a miniature of the Tesla Coil invented in 1891 by Nikola Tesla. It can provide electricity without using wires by generating high voltage and transfering it through air. It can also create lightning effect on a small scale..",
        whatHaveILearned:"This was my very first experience of applying knowledge I learned from textbook to make actual products with my roommates. The original purpose of making this Tesla Coil was to provide light in our dormitory since our teachers prohibited us from bringing our own lamps. Also, I came to understand the difference between theories and practices, and it brought me the feeling of huge satisfactory and success after it worked.",
        image1: images.tc_1,
        image2: images.tc_2,
        image3: images.tc_3,
    },
      {
        id: 3,
        title:"Speakers",
        text:"",
        purpose:"",
        backgroundImage: images.s_bg,
        actions:[{
            text:"",
            url:"",
            color:"",
        }],
        steps:[{
            image: images.s_step_1,
            title:"Step 1",
            text:"Baisc principle",
            // arrowsOrSlides: '',
        },
        {
            image: images.s_step_2,
            title:"Step 2",
            text:"Circuit Diagram for the deputy board",
            // arrowsOrSlides: '',
        },
        {
            image: images.s_step_3,
            title:"Step 3",
            text:"Circuit Diagram for the motherboard",
            // arrowsOrSlides: '',
        },
        {
            image: images.s_step_4,
            title:"Step 4",
            text:"Ordering all parts",
            // arrowsOrSlides: '',
        },
        {
            image: images.s_step_5,
            title:"Step 5",
            text:"Soldering",
            // arrowsOrSlides: '',
        },
        {
            image: images.s_step_6,
            title:"Step 6",
            text:"F nal Assembly",
            // arrowsOrSlides: '',
        },
        ],
        description:"This is a pair of dual track speakers. It is portable and good looking with its transparent shell. It carries a USB cable and a 3.5mm headphone cable, so it is compatible to most phones and laptops.",
        whatHaveILearned:"This is a group project that we worked on during 11th grade. The main theory of how speakers work is through electromagnetic induction, but it is harder to actually make a speaker since there are a lot of components to include. We consulted our teachers and other experts about signal processing and alternating currents and customized our PCB boards from an Elctronics company. It took us another week to assemble the speakers, but one of them did not work. Then, we used multimeter to detect where the problem was on the board. Ultimately, we successfully built our speakers. It was a hard-won but rewarding process in which I gained another experience of turning theories into practices and took me through an essential part in Engineering ?????? troubleshooting. ",
        image1: images.s_1,
        image2: images.s_2,
        image3: images.s_3,
    },
]