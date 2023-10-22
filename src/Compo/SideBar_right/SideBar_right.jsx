import "./SideBar_right.css";

const SideBar_right = () => {
    return (
        <div className="rightSideBar">



            <div className="sponsored">
                <h1>Sponsored</h1>

                <div className="sponsoredContent">

                    <img src="https://pathao.com/np/wp-content/uploads/sites/7/2018/12/Download-app.jpg" />
                    <div>
                        <h1>Ride on uthao</h1>
                        <p>www.uthao.bd.com</p>
                    </div>
                </div>
            </div>


            <div className="recentReq">
                <h1>Friend Request</h1>

                <a href="https://www.facebook.com/me.facebook.id" target="_blank" rel="noreferrer" >

                    <img src="https://avatars.githubusercontent.com/u/119102204?v=4" />

                    <div className="requestedId">
                        <h1>Najmus Sakib</h1>
                        <div className="reqBtns">
                            <button className="confirm">Confirm</button>
                            <button className="delete">Delete</button>
                        </div>
                    </div>

                </a>

            </div>


        </div>
    );
};

export default SideBar_right;