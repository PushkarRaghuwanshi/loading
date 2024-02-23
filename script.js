console.log("hello");


const data = [
    {
        image: "/images/image1.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image2.avif",
        heading: "Rakesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image3.webp",
        heading: "Harsh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image4.webp",
        heading: "Sarthak Pandey",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image5.webp",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image6.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image1.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image2.avif",
        heading: "Rakesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image3.webp",
        heading: "Harsh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image4.webp",
        heading: "Sarthak Pandey",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image5.webp",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image6.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image1.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image2.avif",
        heading: "Rakesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image3.webp",
        heading: "Harsh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image4.webp",
        heading: "Sarthak Pandey",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image5.webp",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image6.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image1.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image2.avif",
        heading: "Rakesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image3.webp",
        heading: "Harsh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image4.webp",
        heading: "Sarthak Pandey",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image5.webp",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image6.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image1.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image2.avif",
        heading: "Rakesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image3.webp",
        heading: "Harsh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image4.webp",
        heading: "Sarthak Pandey",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image5.webp",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    {
        image: "/images/image6.avif",
        heading: "Rajesh Sharma",
        subHeading: "Orthodontist"
    },
    


]

let cluter = "";
data.forEach( items => {
    cluter += `<div class="card">
    <div class="mainImages">
        <img height="50" src=${items.image}>
    </div>
    <h2>${items.heading}</h2>
    <h3>${items.subHeading}</h3>
</div>`
})
document.querySelector(`.cards`).innerHTML = cluter