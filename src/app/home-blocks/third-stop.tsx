import { fa3 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThirdStop = () => {
    return (
        <div className="bg-green-300 py-2 px-5 lg:py-5 lg:px-24 text-center">
            <FontAwesomeIcon size="3x" icon={fa3} className="border-2 border-black rounded-full p-5 px-7" />
            <h2 className="font-bold text-3xl lg:text-4xl my-3">Третя зупинка - &quot;Релакс у селі&quot;</h2>
            <p className="leading-9 text-xl font-medium text-left">Після активностей на фермі настає час для релаксації та відновлення у мирній атмосфері сільського життя. «Релакс у селі» - це ваша можливість відчути спокій та насолодитися простотою природи, забувши про міський шум. Прогулянки мальовничими стежками, сільська лазня з трав&apos;яними віниками, верхова їзда по лісових масивах та полях - все це чекає на вас. Додайте до цього пікнік на лоні природи зі свіжими фермерськими продуктами, і ви отримаєте ідеальний рецепт відпочинку. Ця зупинка також пропонує місце для медитацій та занять йогою на свіжому повітрі, дозволяючи вам знайти внутрішній спокій серед природи. &quot;Релакс у селі&quot; - чудова можливість поновити зв&apos;язок з природою, насолоджуючись її спокоєм та красою, і відчути радість від простих речей у житті.</p>
        </div>
    )
}

export default ThirdStop;