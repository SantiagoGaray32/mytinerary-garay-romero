import "../styles/Activities.css"

function Activities() {
    const activities= [
        {
            name:"Activity1",
            photo:""
        },
        {
            name:"Activity2",
            photo:""
        },
        {
            name:"Activity3",
            photo:""
        },
        {
            name:"Activity4",
            photo:""
        }
    ]
    const render =(activity) => {
        return (
            <div className="activity-Card" >
                <p>{activity.name}</p>
            </div>
        )
    }

    return (
        <div className="activityContainer">
            {activities.map(render)}
        </div>
    )


}
export default Activities;