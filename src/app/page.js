"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Input, Spacer, navbar, Button } from "@nextui-org/react";
import {
    Autocomplete,
    AutocompleteSection,
    AutocompleteItem,
} from "@nextui-org/react";
import { Fragment, useState } from "react";
import StarRatings from "react-star-ratings";
import { easeIn, easeOut, motion } from "framer-motion"
export default function Home() {
    const [showDiv, setShowDiv] = useState(false)
    const navBarWidth = 7;
    const colors = ['#286bff', 'red', 'purple', 'green', 'orange']
    const [colorIndex, setColorIndex] = useState(0)
   const courseData =  [
      {
        "course_prefix": "COMP",
        "course_code": 1511,
        "course_title": "Programming Fundamentals",
        "average_stars": 4.8,
        "total_reviews": 68,
        "offered_terms": ["Term 1", "Term 2", "Term 3"]
      },
      {
        "course_prefix": "COMP",
        "course_code": 1531,
        "course_title": "Software Engineering Fundamentals",
        "average_stars": 3.9,
        "total_reviews": 47,
        "offered_terms": ["Term 1", "Term 2", "Term 3"]
      },
      {
        "course_prefix": "COMP",
        "course_code": 1521,
        "course_title": "Computer Systems Fundamentals",
        "average_stars": 4,
        "total_reviews": 40,
        "offered_terms": ["Term 1", "Term 2", "Term 3"]
      },
      {
        "course_prefix": "COMP",
        "course_code": 2521,
        "course_title": "Data Structures and Algorithms",
        "average_stars": 4,
        "total_reviews": 36,
        "offered_terms": ["Summer", "Term 1", "Term 2", "Term 3"]
      },
      {
        "course_prefix": "COMP",
        "course_code": 2511,
        "course_title": "Object-Oriented Design & Programming",
        "average_stars": 3,
        "total_reviews": 33,
        "offered_terms": ["Term 1", "Term 2", "Term 3"]
      },
      {
        "course_prefix": "COMP",
        "course_code": 3311,
        "course_title": "Database Systems",
        "average_stars": 4,
        "total_reviews": 33,
        "offered_terms": ["Term 1", "Term 3"]
      }
    ]

    return (
        <main className={styles.main}>
            <div style={{ display: "flex" }}>
            <div
    style={{
        width: `${navBarWidth}vw`,
        height: "100vh",
        backgroundColor: "#F8F9FA",
    }}
>
    <img 
        style={{
            width: "50%",
            paddingTop: "20px",
            paddingBottom: "20px",
            margin: "auto auto"
        }} 
        src="./unilectives.svg"
    />
    <Divider style={{width: "80%", margin: "auto"}}></Divider>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: `calc(${100 - navBarWidth}vh - 40px )`}}>
        <div style={{width: "100%", }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width: "67px", height: "67px", margin: "auto", paddingTop: "40"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width: "67px", height: "67px", margin: "auto",paddingTop: "40"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        </div>

        <div style={{width: "100%", }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width: "67px", height: "67px", margin: "auto", paddingTop: "40"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width: "67px", height: "67px", margin: "auto", paddingTop: "40"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width: "67px", height: "67px", margin: "auto", paddingTop: "40"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width: "67px", height: "67px", margin: "auto", paddingTop: "40"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
        </div>
    </div>
</div>





                <div
                    style={{
                        // backgroundColor: "red",
                        width: `${100 - navBarWidth}vw`,
                        height: "100vh",
                        margin: "0 10vw",
                    }}
                >
                  
                   {showDiv ? <>
                    <motion.div style={{justifyContent: 'center', gap: '1rem',display: "flex", outline: "2px solid black", padding: "0.3rem", margin: "0.5rem"}} initial={{opacity: 0, }} animate={{opacity: 1,}}  transition={{duration: 0.5, ease: easeOut, }} exit={{opacity:0,}} >
                      <h4 style={{margin: "auto 0"}}>An extremely cool div</h4>
                      <Button radius="none" onClick={()=> {setShowDiv(false)}}>Dismiss</Button>
                      </motion.div></> : null }
                    <h3>DevSoc presents</h3>
                    <h1  onClick={() => {

setColorIndex((prev)=> {
  return prev + 1
})

                    }} style={{userSelect: "none" ,color: colors[colorIndex & colors.length], fontWeight: 900, fontSize: '4rem'}}>unilectives</h1>
                    <strong>
                        Your one-stop shop for UNSW course and elective reviews
                    </strong>
                   
                    <div style={{padding: "15px 0px",}}>

                      <div onClick={()=> {setShowDiv(true)}}>
                    <Input  color="primary"
                    variant="bordered"
                    startContent={<>
                   

                     <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xmlSpace="preserve">
    <g>
      <g>
        <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />
      </g>
    </g>
  </svg>
                    </>
                    }
                    radius="sm"
                    placeholder="Search for a course e.g. COMP1511"
                    />

                    </div>
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <div style={{width: '20vw', marginBottom: 30}}>

                    <Autocomplete size="sm"
        label="Sort by" 
        >
        <AutocompleteItem>Bogosort</AutocompleteItem>
        <AutocompleteItem>Am I meant to add sorting functionality?</AutocompleteItem>
        <AutocompleteItem>Just let me know</AutocompleteItem>
        <AutocompleteItem>Would you be as so kind as to let me in?</AutocompleteItem>
      </Autocomplete>
          </div>

<div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 50, justifyContent: "space-evenly", width: "100%", height: "100%"}}>

{courseData.map((e, index) => {
  
  return <Fragment key={index}>
<Card style={{padding: '20px'}} shadow="lg">
<CardHeader style={{ position: "relative" }}>
  <div style={{ display: "flex" }}>
  <strong>
     <h2>{`${e.course_prefix}${e.course_code} `}</h2>
    </strong> 
    <div style={{ position: "absolute", right: 0, marginRight: "15px" }}>

<StarRatings  rating={e.average_stars} numberOfStars={5} starDimension="22" starRatedColor="#B08BDF" starSpacing="0"starEmptyColor="lightGrey"/>
      <p style={{color: "#DBDBDB", fontSize: "15px"}}>{`${e.total_reviews} reviews`}</p>

    </div>
  </div>
</CardHeader>
  <CardBody>
<h5>{e.course_title}</h5>

<Spacer y='12'></Spacer>
  </CardBody>
  <CardFooter>
{e.offered_terms.map((e, index)=> {
  return <Fragment key={index}>
    <Chip style={{backgroundColor: "rgb(197 231 244)", marginRight: "10px", marginBottom: "15px"}} >{e}</Chip>
  </Fragment>
})}

  </CardFooter>
</Card>
  </Fragment>
})}
</div>

                    </div>
                </div>
            </div>
        </main>
    );
}
