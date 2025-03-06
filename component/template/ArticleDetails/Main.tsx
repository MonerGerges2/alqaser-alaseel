import ArticleDetails from "./ArticleDetails"
import Comments from "./Commints"
import OtherArticles from "./OtherArticles"

const ProjectDetailsMain = () => {
     const data = {
          web_image: "/assets/vision.jpg",
          title: "Title",
          content: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti placeat nam ipsum exercitationem doloremque, possimus quod, consequuntur ullam animi dolore reprehenderit veritatis, natus libero expedita ratione! Architecto, incidunt tempora eligendi excepturi aliquam voluptates minus aspernatur veniam ullam saepe suscipit error? Voluptates laborum ullam numquam incidunt distinctio? Non, et veniam!                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio iste fugit officiis pariatur repellat aspernatur consectetur saepe odio, nemo autem numquam. Facere ad harum culpa aliquam doloribus exercitationem laudantium at nam dolore! Ea voluptatem dolores deserunt eius consequuntur facere aliquid ullam doloribus exercitationem ratione, adipisci minima sed. Iure veritatis recusandae, nemo est beatae aut nobis rerum ex nostrum iusto sequi ea voluptatibus ullam ducimus. Minus ea labore facere officia praesentium debitis possimus ipsam voluptatem maiores? Impedit aperiam perferendis veritatis sapiente vero nisi accusamus odio eius nemo vel pariatur ratione dicta adipisci praesentium recusandae, saepe earum qui, consectetur animi consequuntur numquam! Nemo maiores consectetur unde debitis libero, amet laborum asperiores consequatur voluptates officiis, soluta quo commodi voluptatum minus?</p>"
     }
     return (
          <div className="bg-white dark:bg-black">
               <div className="container mx-auto px-5 lg:px-10 pt-20 py-10">
                    <ArticleDetails data={data} />
                    <Comments />
                    <OtherArticles />
               </div>
          </div>
     )
}

export default ProjectDetailsMain