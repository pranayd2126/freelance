import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import {
  HiFolder,
  HiDocumentText,
  HiBriefcase,
  HiShieldCheck,
  HiChatAlt2,
  HiChartBar,
  HiArrowRight,
  HiStar,
} from "react-icons/hi";

import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import Spinner from "../components/common/Spinner";

import { fetchProjects } from "../redux/slices/projectSlice";
import { formatCurrency } from "../utils/helpers";


const Landing = () => {


const [activeTab,setActiveTab]=useState("students");


const dispatch=useDispatch();


const {
projects,
isLoading,
error
}=useSelector(
state=>state.projects
);



useEffect(()=>{

dispatch(
fetchProjects({
limit:6,
status:"open"
})
);

},[dispatch]);




const studentSteps=[

{
title:"Create Profile",
desc:"Build your portfolio and showcase skills."
},

{
title:"Apply Projects",
desc:"Bid on real projects matching your skills."
},

{
title:"Earn Money",
desc:"Complete milestones and receive payments."
}

];



const clientSteps=[

{
title:"Post Work",
desc:"Describe your requirements and budget."
},

{
title:"Choose Talent",
desc:"Review bids from verified students."
},

{
title:"Track Delivery",
desc:"Manage progress with milestones."
}

];



const openProjects=
(projects||[])
.filter(p=>p.status==="open")
.slice(0,3);



const features=[

{
icon:HiFolder,
title:"Real Projects",
desc:"Work on industry level projects."
},

{
icon:HiDocumentText,
title:"Smart Bidding",
desc:"Create proposals and win clients."
},

{
icon:HiBriefcase,
title:"Portfolio Growth",
desc:"Convert experience into opportunities."
},

{
icon:HiShieldCheck,
title:"Secure Payments",
desc:"Milestone based protected payments."
},

{
icon:HiChatAlt2,
title:"Realtime Chat",
desc:"Connect instantly with clients."
},

{
icon:HiChartBar,
title:"Progress Tracking",
desc:"Track your freelance journey."
}

];



return (

<div className="min-h-screen bg-[#080b16] text-white overflow-hidden">



{/* HERO */}

<section className="
relative
pt-28
pb-32
">


<div className="
absolute
inset-0
bg-gradient-to-br
from-purple-900/40
via-transparent
to-cyan-900/30
"/>


<div className="
absolute
top-20
left-10
w-72
h-72
bg-purple-600/30
blur-[120px]
rounded-full
"/>


<div className="
max-w-7xl
mx-auto
px-6
relative
">


<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
max-w-4xl
mx-auto
"

>


<div className="
inline-flex
px-5
py-2
rounded-full
bg-white/10
border
border-white/20
text-sm
mb-8
backdrop-blur
">

🚀 Student Freelance Marketplace

</div>


<h1 className="
text-5xl
lg:text-7xl
font-black
leading-tight
">


Build Skills.
<br/>


<span className="
bg-gradient-to-r
from-purple-400
to-cyan-400
text-transparent
bg-clip-text
">

Earn Through Projects

</span>


</h1>



<p className="
mt-8
text-lg
text-gray-300
max-w-2xl
mx-auto
">

A modern platform connecting talented students
with businesses looking for affordable tech solutions.

</p>



<div className="
mt-10
flex
flex-col
sm:flex-row
justify-center
gap-5
">


<Link to="/projects">

<Button size="lg">

Explore Projects

<HiArrowRight className="ml-2"/>

</Button>

</Link>



<Link to="/register">

<Button
variant="outline"
size="lg"
>

Start Now

</Button>

</Link>


</div>


</motion.div>


</div>


</section>





{/* STATS */}


<section className="py-16">


<div className="
max-w-6xl
mx-auto
grid
grid-cols-2
md:grid-cols-4
gap-6
px-6
">


{[
["500+","Projects"],
["1200+","Students"],
["300+","Clients"],
["₹5M+","Earned"]

].map((s,i)=>(


<div
key={i}
className="
bg-white/10
border
border-white/10
rounded-2xl
p-8
text-center
backdrop-blur
"

>

<h2 className="text-3xl font-black">

{s[0]}

</h2>

<p className="text-gray-400">

{s[1]}

</p>


</div>


))}



</div>


</section>





{/* FEATURES */}


<section className="py-24 px-6">


<h2 className="
text-center
text-4xl
font-black
mb-16
">

Why StudentBid?

</h2>



<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-3
gap-8
">


{

features.map((item,i)=>{

const Icon=item.icon;


return(

<div

key={i}

className="
p-8
rounded-3xl
bg-white/10
border
border-white/10
hover:bg-white/15
transition
"

>


<Icon className="
text-cyan-400
text-4xl
mb-6
"/>


<h3 className="
font-bold
text-xl
mb-3
">

{item.title}

</h3>


<p className="text-gray-400">

{item.desc}

</p>



</div>

)


})


}


</div>


</section>
{/* HOW IT WORKS */}

<section
id="how-it-works"
className="
py-24
px-6
bg-white/[0.03]
"
>


<div className="
max-w-6xl
mx-auto
text-center
">


<h2 className="
text-4xl
font-black
mb-4
">

How It Works

</h2>


<p className="
text-gray-400
mb-12
">

Simple workflow designed for students and clients

</p>




<div className="
inline-flex
bg-white/10
p-2
rounded-2xl
border
border-white/10
mb-14
">


<button

onClick={()=>setActiveTab("students")}

className={`
px-8
py-3
rounded-xl
font-bold
transition

${
activeTab==="students"
?
"bg-purple-600 text-white"
:
"text-gray-400"
}

`}
>

Students

</button>



<button

onClick={()=>setActiveTab("clients")}

className={`
px-8
py-3
rounded-xl
font-bold
transition

${
activeTab==="clients"
?
"bg-purple-600 text-white"
:
"text-gray-400"
}

`}
>

Clients

</button>


</div>




<div className="
grid
md:grid-cols-3
gap-8
">


{
(activeTab==="students"
?
studentSteps
:
clientSteps
)
.map((step,index)=>(


<div

key={index}

className="
rounded-3xl
p-8
bg-white/10
border
border-white/10
"


>


<div className="
w-12
h-12
mx-auto
rounded-full
bg-gradient-to-r
from-purple-500
to-cyan-500
flex
items-center
justify-center
font-black
mb-6
">

{index+1}

</div>


<h3 className="
text-xl
font-bold
mb-3
">

{step.title}

</h3>


<p className="
text-gray-400
">

{step.desc}

</p>



</div>


))
}


</div>


</div>


</section>





{/* PROJECTS */}

<section className="
py-24
px-6
">


<div className="
max-w-7xl
mx-auto
">


<div className="
flex
justify-between
items-center
mb-14
">


<div>

<h2 className="
text-4xl
font-black
">

Featured Projects

</h2>


<p className="
text-gray-400
mt-2
">

Explore latest freelance opportunities

</p>

</div>



<Link to="/projects">

<Button variant="outline">

View All

</Button>

</Link>


</div>




<div className="
grid
md:grid-cols-3
gap-8
">


{
isLoading ? (


<div className="
col-span-full
flex
justify-center
py-20
">

<Spinner size="lg"/>

</div>


)

:

error ? (

<p className="
text-red-400
col-span-full
text-center
">

{error}

</p>

)

:

openProjects.length===0 ?

(

<p className="
text-gray-400
col-span-full
text-center
">

No projects available

</p>

)

:

openProjects.map(project=>{


const budget =
project.budget
?
`${formatCurrency(project.budget.min)} - ${formatCurrency(project.budget.max)}`
:
"N/A";


const skills =
project.skills ||
project.skillsRequired ||
[];


return(


<div

key={project._id}

className="
rounded-3xl
p-7
bg-white/10
border
border-white/10
hover:-translate-y-2
transition
duration-300
"

>


<div className="
flex
justify-between
mb-5
">


<Badge variant="primary">

{project.category}

</Badge>


<span className="
text-xs
text-gray-400
">

Open

</span>


</div>




<h3 className="
text-xl
font-bold
mb-3
hover:text-cyan-400
transition
">

<Link to={`/projects/${project._id}`}>

{project.title}

</Link>


</h3>



<p className="
text-gray-400
text-sm
mb-5
">

By {project.client?.fullName || "Client"}

</p>




<div className="
flex
flex-wrap
gap-2
mb-8
">


{
skills
.slice(0,3)
.map(skill=>(


<span

key={skill}

className="
px-3
py-1
rounded-full
bg-white/10
text-xs
text-gray-300
"

>

{skill}

</span>


))
}


</div>




<div className="
border-t
border-white/10
pt-5
flex
justify-between
items-center
">


<div>


<p className="
text-xs
text-gray-500
">

Budget

</p>


<h4 className="
font-black
">

{budget}

</h4>


</div>



<Link to={`/projects/${project._id}`}>

<Button size="sm">

Bid

</Button>

</Link>



</div>



</div>


)


})

}


</div>


</div>


</section>






{/* CTA */}

<section className="
py-28
px-6
">


<div className="
max-w-5xl
mx-auto
rounded-[2rem]
p-12
text-center
bg-gradient-to-r
from-purple-700
to-cyan-600
">


<h2 className="
text-4xl
font-black
mb-5
">

Start Your Freelance Journey

</h2>



<p className="
text-white/80
mb-8
">

Join students building real world experience today.

</p>



<Link to="/register">


<Button
size="lg"
variant="secondary"
>

Create Account

</Button>


</Link>



</div>


</section>



</div>

)

};


export default Landing;