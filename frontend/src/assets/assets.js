import logo from './Tech.png'
import softwareimg from './softwaresimg.jpg'
import enterprisesimg from './enterprisesimg.jpg'
import innovatorsimg from './Innovators.webp'

import team_icon from './team_icon.webp'
import custom_soft_icon  from'./custom_soft_icon.webp'
import mobile_app_icon  from "./mobile_app_icon.webp"
import product_development_icon from './product_development_icon.webp'
import web_development_icon from "./web_development_icon.webp"


export const assets = {
    logo,
    softwareimg,
    enterprisesimg,
    innovatorsimg,
    web_development_icon,
    team_icon,
    custom_soft_icon,
    mobile_app_icon,
    product_development_icon
}

export const CardDummyData = [
    {
       "Title":"Enterprises",
       "Subtitle":"Scale up your business and become more competitive through customized software solutions tailor-made to your needs.",
       "Image":enterprisesimg,
    },
    {
        "Title":"Innovators",
        "Subtitle":"Leverage our technical expertise and ongoing support to successfully build disruptive solutions that transform industries.",
        "Image":innovatorsimg,
     },
     {
        "Title":"Software Companies",
        "Subtitle":"Reduce development costs, gain a competitive advantage and deliver high-quality software solutions under your own brand name.",
        "Image":softwareimg,
     }
]

export const ServiceDummyData =[
    {
        "Title":"Development Team",
        "Subtitle":"Driven by innovation and guided by experience, our development team turns ideas into reality.We work closely with you to build smart, reliable, and scalable digital products.",
        "Icon": team_icon,
    },
    {
        "Title":"Web Development ",
        "Subtitle":"We blend modern design with powerful backend functionality to ensure speed, security, and scalability — delivering web solutions that grow with your business.",
        "Icon": web_development_icon,
    },
    {
        "Title":" Custom Software Development",
        "Subtitle":"From idea to deployment, we handle the entire development lifecycle — ensuring seamless integration, long-term performance, and complete alignment with your business vision.",
        "Icon": custom_soft_icon,
    },
    {
        "Title":"Product Development",
        "Subtitle":"With a user-first approach and agile methodology, we ensure faster go-to-market, better usability, and long-term product growth",
        "Icon": product_development_icon,
    },
    {
        "Title":"Mobile App Development",
        "Subtitle":"Whether it’s a consumer-facing app or a powerful enterprise tool, we build mobile products that engage users and drive real results.",
        "Icon": mobile_app_icon,    }
]