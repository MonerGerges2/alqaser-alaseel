import ArticleDetails from "./ArticleDetails"
import Comments from "./Commints"
import OtherArticles from "./OtherArticles"

const ProjectDetailsMain = () => {
     const data = {
          web_image: "/assets/vision.jpg",
          title: "Title",
          content: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti placeat nam ipsum exercitationem doloremque, possimus quod, consequuntur ullam animi dolore reprehenderit veritatis, natus libero expedita ratione! Architecto, incidunt tempora eligendi excepturi aliquam voluptates minus aspernatur veniam ullam saepe suscipit error? Voluptates laborum ullam numquam incidunt distinctio? Non, et veniam!</p>"
     }
     return (
          <div className="container mx-auto px-5 lg:px-10 pt-20 py-10 bg-white dark:bg-black">
               <ArticleDetails data={data} />
               <Comments />
               <OtherArticles />
          </div>
     )
}

export default ProjectDetailsMain