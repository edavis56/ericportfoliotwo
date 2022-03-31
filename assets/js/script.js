function aboutMe(){
    document.getElementById('page').innerHTML= `
    <div class="sub-container">
        <div>
            <img class="image-wrapper float-left pr-3"class="align-self-start mr-3" src="./images/headShot.png" alt="Headshot Portfolio Picture">
            <div class="media-body">
              <h5 class="mt-0"><a id="AboutMe">About Me</a></h5>
            <p>
                Hi, I'm Eric and I work as an Accountant. However, I am pursuing my interest in becoming a full stack Developer with the goal of merging the two disciplines. I believe this will allow me to create fast, accurate, and efficient accounting processes with the tools readily available no matter the organization.
            </p>
       
            <p>
                I was born in Waleska Georgia, on the way to the hospital in the front seat of my parent's red Chevy Suburban. This strange beginning lead me to a some-what normal life. I grew up in Acworth Georgia where my childhood resembled any other American child in the 90's. I went to school, played sports, and built lifelong friendships along the way. After graduating from North Cobb High School, I went on to study Accounting at<a class="link" href="https://www.kennesaw.edu/"> Kennesaw State University.</a> After graduation I received a job offer from Coca-Cola at their shared services location in Tampa Florida. In July of 2016 I start my career as a Staff Accountant on the Marking & Coupons team. While on this team, I gained valuable training and mentorship. Eighteen months later I received and offer for a Senior Accountant position on the Fixed Assets team. It was here my interest in accounting systems and programing in general began to flourish. As a member of this team, I had the opportunity to work with programmer located in India. They were hired to automate the accounting process and it was my job to teach it to them. I taught them everything form beginning to end. Each piece require to close out the period. In doing this, I became curious. I began researching how SAP worked and what additional functionality Excel had. It was here I got my first taste of programming through VBA and Macros. Within a few months outside of my regular duties, I was able to replicate what the programers where doing using only SAP and Excel.
            </p>
    
            <p>
                I had found a spark. Something I enjoyed and wanted to learn more about. Unfortunately, family matters arose and I had to leave my job in Tampa to move back to Atlanta. Since moving back to Atlanta, I have bounced around from a few jobs at the Senior Accountant level. These jobs ranged from small family owned manufacturing organizations to mid-sized equity owned engineering testing. Not to mention my prior experience at Coca-Cola. I began to find myself in an odd place. I wanted to continue being an accountant, but I also wanted to learn more about computer programing. I was lost and unsure of what to do. So, I decided to further my education in accounting and earned my Masters in Accounting from<a class="link" href="https://www.georgiasouthern.edu/"> Georgia Southern University.</a> I continued on working as a Senior Accountant. After a few months, I kept noticing the need for my team to have a highly computer literate accountant on the team. Someone who understood the inner workings of the accounting system as well as Microsoft products like Excel and Access.
            </p>
    
            <p>
                I firmly believe that the accounting departments across any organization do not maximize the use of the software at hand. Time after time, I see organization going out and purchasing software to complete a relatively easy task all because they do not truly understand Excel or NetSuite or Access or SAP or etc. From an accounting perspective this makes no sense. It's cheaper to retain an employee than hire a new one, this too should be applied to software. 
            </p>
    
            <p>
                This is why I found myself in the <a class="link" href="https://bootcamp.pe.gatech.edu/coding/"> Georgia Tech Coding Boot Camp.</a> To become that accountant and find an organization willing enough to trust in my abilities to enact change for the betterment! 
            </p>`;
}

function tree(){
    document.getElementById('page').innerHTML= `
    <div class="media-body">
              <h5 class="mt-0"><a id="Interest">Hiking!!!</a></h5>
            <p>
                Having grown up in NorthWest Georgia, I love to hike! It could be a steep incline or a flat path, either way I enjoy them both. Here are some of my favorite places to visit. 
            </p>
            <div class="col-lg">
                            <img src="./images/kMt.jfif" alt="Kennesaw Mountian" class="img-thumbnail"></img>Kennesaw Mountian</a>
                            <img  id="chiefs" src="./images/pMt.jfif" alt="Kansas City Chiefs Logo" class="img-thumbnail"></img>Pine Mountian</a>
                            <img  id="movie" src="./images/pass.jfif" alt="Movies Reel" class="img-thumbnail"></img>Allatoona Pass</a>
                          </div>
    `;}

    function chiefs(){
        document.getElementById('page').innerHTML= `
        <div class="media-body">
                  <h5 class="mt-0"><a id="Interest">Chiefs!!!</a></h5>
                <p>
                    My Dad grew up right outside of Kansas City, so naturally I am a Chiefs Fan. I see at least one game each year in KC, if not more. I have been to the past three AFC championship games at Arrowhead. And yes I am still mad about the last one.
                </p>
                <div class="col-lg">
                                <img src="./images/game.jpg" alt="Eric at the Chiefs game" class="img-thumbnail"></img></a>
                              </div>
        `;}

function home(){
    window.location.reload();}