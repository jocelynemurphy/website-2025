"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "../footer";
import HomeNav from "../homenav";

interface Photo {
  type:
    | "sketch"
    | "art"
    | "dudes"
    | "eng"
    | "babyphoto"
    | "headshot"
    | "media"
    | "silly"
    | "video";
  link: string;
  title: string;
}

const photos: Photo[] = [
  // Art pieces
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-baking.png",
    title: "Baking illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-beach.jpg",
    title: "Beach scene",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-bigbrain.jpg",
    title: "Big brain concept art",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-bikeguy.jpeg",
    title: "Bike guy character",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-blobdude.png",
    title: "Blob dude character",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-bodyface.png",
    title: "Body face abstract art",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-bottle.JPG",
    title: "Bottle still life",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-braids.jpg",
    title: "Portrait with braids",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-brain.jpg",
    title: "Brain illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-buildingumbrella.JPG",
    title: "Building with umbrella",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-buns.jpg",
    title: "Hair buns portrait",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-cactus.jpg",
    title: "Cactus illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-campfire.jpg",
    title: "Campfire scene",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-canoe.jpg",
    title: "Canoe on water",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-cheetah.jpg",
    title: "Cheetah painting",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-chef.png",
    title: "Chef character",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-circle.png",
    title: "Circle abstract composition",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-circle2.png",
    title: "Circle composition 2",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-coffeetea.png",
    title: "Coffee and tea illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-coolgirl.jpeg",
    title: "Cool girl portrait",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-cqe.jpg",
    title: "CQE artwork",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-crying.jpg",
    title: "Crying emotion study",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-dance.jpg",
    title: "Dance movement",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-doodleworld.jpg",
    title: "Doodle world",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-dripface.png",
    title: "Drip face abstract",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-elephant.jpg",
    title: "Elephant painting",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-face.JPG",
    title: "Face portrait study",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-faces.jpeg",
    title: "Multiple faces",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-fierce.png",
    title: "Fierce expression",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-fruitfly.png",
    title: "Fruit fly illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-fruits.jpg",
    title: "Fruits still life",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-house.png",
    title: "House illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-leaves.jpg",
    title: "Leaves nature study",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-mountain.jpg",
    title: "Mountain landscape",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-octopus.png",
    title: "Octopus illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-perspective.JPG",
    title: "Perspective study",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-rainbowtree.jpg",
    title: "Rainbow tree",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-ss-face.png",
    title: "Stylized face portrait",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-sunset.png",
    title: "Sunset landscape",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-toronto1.JPG",
    title: "Toronto cityscape 1",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-toronto2.JPG",
    title: "Toronto cityscape 2",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-train.png",
    title: "Train illustration",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-treeface.JPG",
    title: "Tree face artwork",
  },
  {
    type: "art",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-wolf.jpg",
    title: "Wolf painting",
  },

  // Sketches
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-ansonnapping.png",
    title: "Anson napping sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-bald.JPG",
    title: "Bald portrait sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-bird.png",
    title: "Bird sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-blobface.png",
    title: "Blob face sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-bonkbird.png",
    title: "Bonk bird sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-castle.png",
    title: "Castle sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-codergirl.png",
    title: "Coder girl sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-dino.png",
    title: "Dinosaur sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-disco.png",
    title: "Disco sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-duck.png",
    title: "Duck sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-eyeball.png",
    title: "Eyeball sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-fish.png",
    title: "Fish sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-flamingo.png",
    title: "Flamingo sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-giraffe.png",
    title: "Giraffe sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-globabuild.JPG",
    title: "Global building sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-happybirthday.png",
    title: "Happy birthday sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-hat.png",
    title: "Hat sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-hello.png",
    title: "Hello greeting sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-highway.png",
    title: "Highway perspective sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-humandonut.png",
    title: "Human donut sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-math.png",
    title: "Math equations sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-network.png",
    title: "Network diagram sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-oil-toronto-house.JPG",
    title: "Toronto house oil sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-pants.png",
    title: "Pants design sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-princess.png",
    title: "Princess character sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-rawr.png",
    title: "Rawr expression sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-scared.png",
    title: "Scared expression sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-shower.png",
    title: "Shower scene sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-squeeze.JPG",
    title: "Squeeze gesture sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-squiggles.png",
    title: "Squiggles abstract sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-summersupplies.JPG",
    title: "Summer supplies sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-topofworld.png",
    title: "Top of world sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-whale.png",
    title: "Whale sketch",
  },
  {
    type: "sketch",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/sketch-yawn.JPG",
    title: "Yawn expression sketch",
  },

  // Dudes
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dude-champ.png",
    title: "Champion dude",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dude-trench.png",
    title: "Trench coat dude",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-adhd.png",
    title: "ADHD illustration",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-audience.png",
    title: "Audience scene",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-beanbag.png",
    title: "Bean bag relaxing",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-beginner.png",
    title: "Beginner level",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-blocks.png",
    title: "Building blocks",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-books.png",
    title: "Reading books",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-box.png",
    title: "Box concept",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-car.png",
    title: "Car driving",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-cars.png",
    title: "Multiple cars",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-cooking.png",
    title: "Cooking scene",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-desk.png",
    title: "Desk work",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-doubleloveflop.png",
    title: "Double love flop",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-floaty.png",
    title: "Floating concept",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-genius.png",
    title: "Genius moment",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-hockey.png",
    title: "Hockey playing",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-hypno.png",
    title: "Hypnosis scene",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-icecream.png",
    title: "Ice cream enjoyment",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-knockknock.png",
    title: "Knock knock joke",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-leadership.png",
    title: "Leadership concept",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-loveflop.png",
    title: "Love flop",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-media.png",
    title: "Media consumption",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-micdrop.png",
    title: "Mic drop moment",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-micromanage.png",
    title: "Micromanagement",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-mop.png",
    title: "Mopping scene",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-papers.png",
    title: "Paper work",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-queen.png",
    title: "Queen character",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-racket.png",
    title: "Tennis racket",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-rainbow.png",
    title: "Rainbow scene",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-robot.png",
    title: "Robot character",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-runfast.png",
    title: "Running fast",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-sandwich.png",
    title: "Sandwich eating",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-scooter.png",
    title: "Scooter riding",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-scuba.png",
    title: "Scuba diving",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-shy.png",
    title: "Shy expression",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-simplefriend.png",
    title: "Simple friend",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-skilledstack.png",
    title: "Skilled stack",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-star.png",
    title: "Star moment",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-subwaythoughts.png",
    title: "Subway thoughts",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-teacher.png",
    title: "Teacher scene",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-thoughts.png",
    title: "Deep thoughts",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-waterwings.png",
    title: "Water wings swimming",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-welcome.png",
    title: "Welcome greeting",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-workinghard.png",
    title: "Working hard",
  },
  {
    type: "dudes",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dudes-workspace.png",
    title: "Workspace setup",
  },

  // Engineering
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-arduino.jpeg",
    title: "Arduino project",
  },
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-dashboard.png",
    title: "Dashboard interface",
  },
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-electricity.png",
    title: "Electricity concept",
  },
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-floorlight.png",
    title: "Floor light design",
  },
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-haptisteer.png",
    title: "Haptisteer project",
  },
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-haptisteer2.png",
    title: "Haptisteer project 2",
  },
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-roundadoubtdiorama.png",
    title: "Roundabout diorama",
  },
  {
    type: "eng",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/eng-roundadoubtsigns.jpeg",
    title: "Roundabout signs",
  },

  // Baby Photos
  {
    type: "babyphoto",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/babyphoto-butt.JPG",
    title: "Baby photo - butt",
  },
  {
    type: "babyphoto",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/babyphoto-cake.JPG",
    title: "Baby photo - cake",
  },
  {
    type: "babyphoto",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/babyphoto-doublefist.JPG",
    title: "Baby photo - double fist",
  },
  {
    type: "babyphoto",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/babyphoto-elmo.JPG",
    title: "Baby photo - with Elmo",
  },
  {
    type: "babyphoto",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/babyphoto-feathers.JPG",
    title: "Baby photo - with feathers",
  },
  {
    type: "babyphoto",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/babyphoto-shrek.jpg",
    title: "Baby photo - Shrek themed",
  },

  // Headshots
  {
    type: "headshot",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/headshot-1.JPG",
    title: "Professional headshot 1",
  },
  {
    type: "headshot",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/headshot-2.JPG",
    title: "Professional headshot 2",
  },
  {
    type: "headshot",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/headshot-3.JPG",
    title: "Professional headshot 3",
  },
  {
    type: "headshot",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/headshot-4.JPG",
    title: "Professional headshot 4",
  },
  {
    type: "headshot",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/headshot-5.JPG",
    title: "Professional headshot 5",
  },
  {
    type: "headshot",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/headshot-6.JPG",
    title: "Professional headshot 6",
  },

  // Media
  {
    type: "media",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/media-betakit.jpg",
    title: "BetaKit media feature",
  },
  {
    type: "media",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/media-vivek.jpeg",
    title: "Vivek media photo",
  },

  // Silly
  {
    type: "silly",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/silly-dodgeball.png",
    title: "Silly dodgeball scene",
  },

  // Videos
  {
    type: "video",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/djo!.mov",
    title: "DJO video",
  },
  {
    type: "video",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/dramatic.mov",
    title: "Dramatic video",
  },
  {
    type: "video",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-dancer.mov",
    title: "Dancer video",
  },
  {
    type: "video",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-europe.mov",
    title: "Europe travel video",
  },
  {
    type: "video",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-finalreelwaterloof22.mov",
    title: "Final reel Waterloo F22",
  },
  {
    type: "video",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-montreal.mov",
    title: "Montreal video",
  },
  {
    type: "video",
    link: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-waterloooo.mov",
    title: "Waterloo video",
  },
];

export default function ArtPortfolio() {
  const [showSketches, setShowSketches] = useState(true);
  const [showArt, setShowArt] = useState(true);
  const [showDudes, setShowDudes] = useState(true);
  const [showEng, setShowEng] = useState(true);
  const [showBabyphoto, setShowBabyphoto] = useState(true);
  const [showHeadshot, setShowHeadshot] = useState(true);
  const [showMedia, setShowMedia] = useState(true);
  const [showSilly, setShowSilly] = useState(true);
  const [showVideo, setShowVideo] = useState(true);

  const filteredPhotos = photos.filter((photo) => {
    if (photo.type === "sketch" && showSketches) return true;
    if (photo.type === "art" && showArt) return true;
    if (photo.type === "dudes" && showDudes) return true;
    if (photo.type === "eng" && showEng) return true;
    if (photo.type === "babyphoto" && showBabyphoto) return true;
    if (photo.type === "headshot" && showHeadshot) return true;
    if (photo.type === "media" && showMedia) return true;
    if (photo.type === "silly" && showSilly) return true;
    if (photo.type === "video" && showVideo) return true;
    return false;
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeNav />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8">Art Portfolio</h1>

        {/* Filter Switches */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showSketches}
              onChange={(e) => setShowSketches(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Sketches</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showArt}
              onChange={(e) => setShowArt(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Art</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showDudes}
              onChange={(e) => setShowDudes(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Dudes</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showEng}
              onChange={(e) => setShowEng(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Engineering</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showBabyphoto}
              onChange={(e) => setShowBabyphoto(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Baby Photos</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showHeadshot}
              onChange={(e) => setShowHeadshot(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Headshots</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showMedia}
              onChange={(e) => setShowMedia(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Media</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showSilly}
              onChange={(e) => setShowSilly(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Silly</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showVideo}
              onChange={(e) => setShowVideo(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Videos</span>
          </label>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.link}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-1 capitalize">
                  {photo.type}
                </p>
                <p className="text-sm font-medium">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No photos to display. Please select at least one filter.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
