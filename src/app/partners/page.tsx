import { Card, Image, Input, Textarea, Button, Link } from "../../lib/next-ui";

export default function Partners() {


  return (
    <div className="px-3 lg:px-24">
      <h1 className="text-center mt-2 font-bold text-3xl lg:text-4xl">Співпраця з нами - це вигідно!</h1>
      <h2 className="text-center leading-9 text-2xl font-medium">Фермерське господарство Пан Білан - це пряма поставка від ферми до покупця</h2>
      <p className="leading-9 text-xl font-medium">Наше фермерське господарство запрошує до співпраці супермаркети і підприємтва громадського харчування будь-якого типу: ресторани, кафе, бари, їдальні, закусочні, піцерії, шашличні і т.д. Замовляючи продукти в нас, будьте впевнені, що ми гарантуємо високу якість і вчасну доставку</p>

      <p className="text-center my-4 font-bold text-3xl lg:text-4xl">Що ви можете замовити в нас: </p>
      <p className="leading-9 text-xl font-medium">
        Зелені культури: Салат Кочанний Айсберг, Салат Ромен, Салат Фріззе, Салат Лолло Роса, Салат Лолло Біонда, Салат Дуболісний червоний, Салат Дуболісний зелений, Салат Фріліс, Салат Батавія, Кріп, Петрушка, Черешковий селера ( Bejo), перо.
        Овочеві та коренеплоди: Томати тип «Солероссо» (Isida-2012), Цибуля «Кенді» салатна (Isida-2012), Цибуля Марс» червона салатна (Isida-2012), Коренева селера (bejo)
        Пряні трави: Базилік червоний, Базилік зелений, Орегано, Кмин, Зіра, Фенхель
      </p>

      <h2 className="text-center my-4 font-bold text-3xl lg:text-4xl">Гарантії якості:</h2>
      <p className="leading-9 text-xl font-medium">
        Фермерські продукти відрізняються не лише на вигляд, але і за своїми органолептичними властивостями. У питанні постачання продуктів для ресторанів велике значення має довіра фермеру, оскільки тривалого тісного співробітництва ресторану потрібні гарантії від фермерського господарства.
        Тому продукти для ресторанів в Одесі від фермерського господарства «Пан Білан» гарантовано мають високу якість, яка відповідає стандартам, прийнятим у Європі.
        Замовники продукції можуть поставити будь-які питання про процес вирощування товарів, що пропонуються нами, дізнатися про умови вирощування в теплицях, про поля, на яких ми вирощуємо зелені культури та інші фермерські продукти для ресторанів.
        З питань співробітництва та організацій постачання фермерських продуктів до ресторанів Одеської, Київської, Дніпропетровської, Миколаївської області телефонуйте за номером 050 316 6313.
      </p>

      <h2 className="text-center my-4 font-bold text-3xl lg:text-4xl">Список партнерів</h2>
      <div>
        <Card>
          <div className="border-none grid grid-cols-2 lg:grid-cols-3 p-5 gap-12 items-center justify-items-center">
            <Image alt="Auchan" height={300} width={300} className="object-cover" src="https://logo-logos.com/2016/11/Auchan_logo.png" />
            <Image alt="Silpo" height={300} width={300} className="object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Silpo_outline_logo.svg/1200px-Silpo_outline_logo.svg.png"/>
            <Image alt="Tavria V" height={300} width={300} className="object-cover" src="https://allretail.ua/static/files/originals/3/23/a561111d8d7e77f95c61938d4fac0233.svg" />
            <Image alt="Levada" className="object-cover lg:hidden" src="https://www.levada.ua/_nuxt/img/levada-logo.90e56a2.svg" />
          </div>
          <div className="border-none hidden lg:grid grid-cols-4 p-5 gap-12 items-center justify-items-center">
            <Image alt="Odesa Factory" height={300} width={300} className="object-cover" src="https://svityaz.biz/wp-content/uploads/2017/04/odesa.png" />
            <Image alt="Olio Pizza" height={300} width={300} className="object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKwwnpvQyA7MPgjBghKWv9egMS5FxfO0r68kXLOmb&s" />
            <Image alt="Levada" className="object-cover" src="https://www.levada.ua/_nuxt/img/levada-logo.90e56a2.svg" />
            <Image alt="Prestige Fruit" height={300} width={300} className="object-cover" src="https://prestigefruit.com/app/themes/lyfter-child/img/base/brand-logo.png"/>
          </div>
        </Card>
      </div>

      <h2 className="text-center my-4 font-bold text-3xl lg:text-4xl">Стати нашим партнером</h2>
      <form className="max-w-[1200px] m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-5">
          <Input type="text" label="Ім'я та прізвище" placeholder="Василь Петренко" size="lg" variant="bordered" radius="md" labelPlacement="outside" required/>
          <Input type="text" label="E-mail" placeholder="vasylpetrenko@example.com" size="lg" variant="bordered" radius="md" labelPlacement="outside" required/>
          <Input type="text" label="Номер телефону" placeholder="+38 099 999 9999" size="lg" variant="bordered" radius="md" labelPlacement="outside" required/>
          <Input type="text" label="Назва бізнесу" placeholder="Ресторан: &quot;В гостях у Петренка&quot;" size="lg" variant="bordered" radius="md" labelPlacement="outside" required/>
        </div>
        <Textarea className="mt-5" label="Повідомлення" placeholder="Розкажіть як ви бачите партнерство вашого бізнесу із ФГ &quot;Пан Білан&quot;..." size="lg" variant="bordered" radius="md" labelPlacement="outside" />
        <div className="w-full text-center">
          <Button color="success" size="lg" variant="solid" className="m-auto mt-5">Відправити заявку</Button>
        </div>
      </form>
    </div>
  )
}