import App from './App';



function AddFriend(){
    return(
        <App>



            <p></p>
            <input type="text" placeholder="Search.." name="search2"></input>
            <select id="country" name="country">
                <option value="au">ID</option>
                <option value="ca">Phone No</option>
            </select>

            <p></p>

            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="domne.jpg" width= "100%" height="100%"/>
                </div>
             <div class="flip-card-back">
                <h1>Dome</h1> 
                <p>มือมีดพระนคร</p> 
                <p>ชอบกินไอติมไผ่ทอง</p>
            </div>
        </div>
        </div>
            <p></p>
            <b>โดมหนุ่มเกาหลีกับสังกะสีคู่ใจ</b>
            <p></p>
            <a href="#" class="button">+AddFriend</a>



        </App>

    )
}

export default AddFriend;