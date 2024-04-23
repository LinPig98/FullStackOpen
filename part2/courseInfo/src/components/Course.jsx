const Name = ({name}) => (
    <>
            <h2>{name}</h2>
    </>
)
  
const Part = ({name, exercises}) => (
    <>
        <p>{name} {exercises}</p>
    </>
)
  
const Content = ({parts}) => (    
    <>
        {parts.map(part => <Part key={part.id} name ={part.name} exercises={part.exercises} />) }
    </>
)

const Total = ({parts}) => {

    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <>
            <b>Total of {totalExercises} exercises</b>
        </>
    );
}
  
const Course = ({course}) => {

    return(
        <>
            <Name name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course
