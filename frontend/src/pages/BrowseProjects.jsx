import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

import {
HiSearch,
HiFilter,
HiBriefcase,
HiCurrencyDollar,
HiCalendar,
HiChevronLeft,
HiChevronRight
} from "react-icons/hi";


import {
Input,
Button,
Badge,
Card,
Spinner,
Select
} from "../components/common";


import {formatCurrency} from "../utils/helpers";
import {fetchProjects} from "../redux/slices/projectSlice";



const CATEGORIES=[

{value:"",label:"All Categories"},
{value:"Web Development",label:"Web Development"},
{value:"Mobile Apps",label:"Mobile Apps"},
{value:"UI/UX Design",label:"UI/UX Design"},
{value:"Content Writing",label:"Content Writing"},
{value:"Graphic Design",label:"Graphic Design"},
{value:"Digital Marketing",label:"Digital Marketing"},
{value:"Data Science",label:"Data Science"},
{value:"Other",label:"Other"}

];



const EXPERIENCE_LEVELS=[

{value:"",label:"All Levels"},
{value:"Beginner",label:"Beginner"},
{value:"Intermediate",label:"Intermediate"},
{value:"Expert",label:"Expert"}

];




const BrowseProjects=()=>{


const dispatch=useDispatch();


const {
projects,
totalPages,
currentPage,
isLoading,
error
}=useSelector(
state=>state.projects
);



const [page,setPage]=useState(1);



const {
register,
handleSubmit,
watch,
reset
}=useForm({

defaultValues:{

search:"",
category:"",
experienceLevel:"",
minBudget:"",
maxBudget:""

}

});



const watchFilters=watch();



const fetchFilteredProjects=(filters=watchFilters,pageNum=page)=>{


const params={

page:pageNum,
limit:9,
status:"open",

...(filters.search && {
search:filters.search
}),


...(filters.category && {
category:filters.category
}),


...(filters.experienceLevel && {
experienceLevel:filters.experienceLevel
}),


...(filters.minBudget && {
minBudget:filters.minBudget
}),


...(filters.maxBudget && {
maxBudget:filters.maxBudget
})


};



dispatch(
fetchProjects(params)
);


};




useEffect(()=>{


fetchFilteredProjects(
watchFilters,
page
);


},[
page,
dispatch
]);




const onSearchSubmit=(data)=>{

setPage(1);

fetchFilteredProjects(
data,
1
);

};



const handleReset=()=>{


reset();

setPage(1);


fetchFilteredProjects({

search:"",
category:"",
experienceLevel:"",
minBudget:"",
maxBudget:""

},1);


};




const handlePageChange=(newPage)=>{


if(
newPage>=1 &&
newPage<=totalPages
)

setPage(newPage);


};





return(


<div className="
min-h-screen
bg-[#080b16]
text-white
px-6
py-12
">



<div className="
max-w-7xl
mx-auto
">


{/* HEADER */}


<div className="mb-12">


<h1 className="
text-5xl
font-black
tracking-tight
">


Browse


<span className="
ml-3
bg-gradient-to-r
from-purple-400
to-cyan-400
bg-clip-text
text-transparent
">

Projects

</span>


</h1>



<p className="
mt-4
text-gray-400
">

Find exciting freelance projects and start earning.

</p>


</div>





<div className="
grid
lg:grid-cols-4
gap-8
">


{/* FILTER */}



<div className="
lg:col-span-1
h-fit
rounded-3xl
p-6
bg-white/10
border
border-white/10
backdrop-blur-xl
">


<div className="
flex
justify-between
items-center
border-b
border-white/10
pb-5
mb-6
">


<h2 className="
font-bold
flex
gap-2
items-center
">


<HiFilter className="text-cyan-400"/>

Filters


</h2>



<button

onClick={handleReset}

className="
text-sm
text-purple-400
font-bold
"

>

Reset

</button>


</div>





<form

onSubmit={handleSubmit(onSearchSubmit)}

className="
space-y-5
"

>



<Input

label="Search"

placeholder="React, Python..."

icon={HiSearch}

{...register("search")}

/>



<Select

label="Category"

options={CATEGORIES}

{...register("category")}

/>




<Select

label="Experience"

options={EXPERIENCE_LEVELS}

{...register("experienceLevel")}

/>




<div className="
grid
grid-cols-2
gap-3
">


<Input

type="number"

placeholder="Min ₹"

{...register("minBudget")}

/>


<Input

type="number"

placeholder="Max ₹"

{...register("maxBudget")}

/>



</div>




<Button fullWidth>

Apply Filters

</Button>



</form>


</div>
{/* PROJECT LIST */}


<div className="
lg:col-span-3
">


{
isLoading ?

(

<div className="
flex
justify-center
items-center
h-72
">

<Spinner size="lg"/>

</div>

)

:

error ?

(

<div className="
rounded-2xl
bg-red-500/10
border
border-red-500/20
p-5
text-red-400
">

{error}

</div>

)

:

!projects || projects.length===0 ?

(

<div className="
rounded-3xl
bg-white/10
border
border-white/10
py-20
text-center
">


<HiBriefcase
className="
mx-auto
text-5xl
text-gray-500
"
/>


<h3 className="
mt-5
font-bold
text-xl
">

No projects found

</h3>


<p className="
text-gray-400
mt-2
">

Try changing filters

</p>


<div className="mt-6">

<Button
variant="outline"
onClick={handleReset}
>

Clear Filters

</Button>

</div>


</div>


)

:


<div className="space-y-10">


<div className="
grid
md:grid-cols-2
gap-7
">


{

projects.map((proj)=>(



<Card

key={proj._id}

className="
group
h-full
flex
flex-col
rounded-3xl
bg-white/10
border
border-white/10
backdrop-blur-xl
hover:-translate-y-2
hover:bg-white/15
transition-all
duration-300
"

>


<div className="flex-1">


{/* BADGES */}

<div className="
flex
justify-between
items-center
mb-5
">


<Badge variant="primary">

{proj.category}

</Badge>



<Badge

variant={
proj.experienceLevel==="Beginner"
?
"success"
:
proj.experienceLevel==="Intermediate"
?
"info"
:
"warning"
}

>

{proj.experienceLevel}

</Badge>


</div>





{/* TITLE */}


<h3 className="
text-xl
font-black
line-clamp-2
mb-3
group-hover:text-cyan-400
transition
">


<Link to={`/projects/${proj._id}`}>

{proj.title}

</Link>


</h3>





{/* DESCRIPTION */}


<p className="
text-gray-400
text-sm
leading-relaxed
line-clamp-3
mb-5
">

{proj.description}

</p>






{/* SKILLS */}


<div className="
flex
flex-wrap
gap-2
mb-6
">


{

proj.skillsRequired
?.slice(0,3)
.map((skill,index)=>(


<span

key={index}

className="
px-3
py-1
rounded-full
text-xs
bg-white/10
text-gray-300
"

>

{skill}

</span>


))


}




{
proj.skillsRequired?.length>3 &&


<span className="
px-3
py-1
rounded-full
text-xs
bg-white/10
text-gray-300
">

+
{proj.skillsRequired.length-3}
 more

</span>


}



</div>


</div>






{/* FOOTER */}


<div className="
border-t
border-white/10
pt-5
mt-5
">



<div className="
flex
justify-between
items-center
text-sm
mb-6
">


<div className="
flex
gap-2
items-center
">


<HiCurrencyDollar
className="
text-emerald-400
text-xl
"
/>


<span className="
font-bold
">

{formatCurrency(proj.budget?.min)}

 -

{formatCurrency(proj.budget?.max)}

</span>


</div>




<div className="
flex
gap-2
items-center
text-gray-400
">


<HiCalendar/>


<span>

{
proj.deadline
?
new Date(proj.deadline).toLocaleDateString()
:
"No deadline"
}

</span>


</div>



</div>






<div className="
flex
items-center
justify-between
">



<div className="
flex
items-center
gap-3
">


<div className="
w-9
h-9
rounded-full
bg-gradient-to-r
from-purple-500
to-cyan-500
flex
items-center
justify-center
font-black
">


{
proj.client?.fullName
?
proj.client.fullName[0].toUpperCase()
:
"C"
}


</div>



<p className="
text-sm
font-bold
truncate
max-w-[120px]
">


{
proj.client?.fullName
||
"Client"
}


</p>



</div>






<Link to={`/projects/${proj._id}`}>

<Button size="sm">

View Details

</Button>

</Link>




</div>



</div>


</Card>


))


}


</div>







{/* PAGINATION */}



{
totalPages>1 &&


<div className="
flex
justify-between
items-center
rounded-2xl
bg-white/10
border
border-white/10
p-5
">


<p className="
text-sm
text-gray-400
">


Page


<span className="
font-bold
text-white
mx-1
">

{currentPage}

</span>


of


<span className="
font-bold
text-white
ml-1
">

{totalPages}

</span>


</p>




<div className="
flex
items-center
gap-2
">



<button

onClick={()=>handlePageChange(page-1)}

disabled={page===1}

className="
p-3
rounded-xl
bg-white/10
disabled:opacity-40
"

>

<HiChevronLeft/>

</button>





{

Array.from(
{length:totalPages},
(_,i)=>i+1
)

.map(num=>(



<button

key={num}

onClick={()=>handlePageChange(num)}

className={`

px-4
py-2
rounded-xl
font-bold


${
num===page
?
"bg-purple-600 text-white"
:
"bg-white/10 text-gray-300"
}


`}

>


{num}


</button>


))

}






<button

onClick={()=>handlePageChange(page+1)}

disabled={page===totalPages}

className="
p-3
rounded-xl
bg-white/10
disabled:opacity-40
"

>

<HiChevronRight/>

</button>



</div>



</div>


}



</div>


}



</div>


</div>


</div>


</div>


)

};


export default BrowseProjects;