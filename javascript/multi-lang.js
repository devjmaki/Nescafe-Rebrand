//English
$(function() {
    $(".en").click(function() {
        //top-menu
        $(".language-selected").text("en-US");
        $(".sign-in").text("SIGN IN");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-fr");
        $(".language-selected").removeClass("change-ja");
        $(".language-selected").addClass("change-en");
        //offcanvas
        $(".offcanvas-title").text("Shopping Cart");
        $(".delivery-txt").text("Delivery");
        $(".delivery-price").text("₱0");
        $(".total-txt").text("Total");
        $(".total-price").text("₱ 0.00");
        $("#check-out").text("Checkout");
        $("#shop").text("Continue shopping");

        // login
        $(".pass").text("Forgot Password");
        $(".login-btn").text("Login");
        $(".reset-btn").text("Reset");
        $(".alt-login").text("Login using");
        
        // landing page
        //section 1
        $("#title").text("DISCOVER A RICHER TASTE");
        $("#sub-title").text("Tastier coffee, new Nescafé");
        $(".direction").text("Find out more");
        // section 2
        $(".overview-title").text("The promise of pure gold.");
        $(".overview-sub").text("Experience the unrivalled flavour of the Roastery.");
        $(".overview-p").text("NESCAFÉ GOLD BLEND Roastery Collection is a range of three new premium instant coffees for coffee drinkers looking for a refined, high quality coffee at home. Each of the new blends have been crafted by the NESCAFÉ GOLD BLEND master roasters and gives you the opportunity to experience the refined taste of expertly roasted coffee from the comfort of your own home. ");
        $(".shop-btn").text("Shop Now");
        // section 3
        $(".sec3-p").text("For lovers of coffee.");
        // section 4
        $("#brand1").text("NESCAFÉ");
        $("#brand2").text("GOLD");
        $("#brand3").text("BLEND");
        $(".lr-coffee").text("LIGHT ROAST");
        $(".dr-coffee").text("DARK ROAST");
        $(".lrd-coffee").text("LIGHT ROAST DECAF");
        // section 5    
        $(".recipe-title").text("Roastery COLLECTION");
        $(".recipe-sub").text("FOR EVERY EXPERIENCE");
        $(".recipe-p").text("From deliciously chilled smoothies to velvety smooth cocktails, try making your favourite NESCAFÉ coffee recipes at home and share a snap of your creations using the hashtag #NescafeRecipes.");
        $(".recipe-btn").text("View All Recipes");
        // section 7
        $(".footer-title").text("Like what you see? Come, sip with us!");
        $(".contact-btn").text("Let's Talk");
        $(".home-menu").text("HOME");
        $(".shop-menu").text("COFFEES");
        $(".recipe-menu").text("RECIPES");
        $(".about-menu").text("ABOUT US");
        $(".contact-menu").text("CONTACT US");
        $(".newsletter").text("NEWSLETTER");
        $(".sub-btn").text("SUBSCRIBE");

        // shop page
        $(".gb-coffee").text("GOLD BLEND");
        $("#ngBrand").text("NESCAFÉ Gold Blend");
        $(".sc-coffee").text("Smooth Coffee");
        $(".ie-coffee").text("Instant Espresso");
        $(".nd-coffee").text("NON-DAIRY");
        $(".cl-coffee").text("Coconut Latte");
        $(".ol-coffee").text("Oat Latte");
        $(".add-btn").text("Add to Cart");

        // recipes page
        // section 1
        $(".sec1-p").text("Coffee Recipes");
        // section 2
        $(".recipe-overview").text("Share the taste of friendship.");
        $(".recipe-op").text(" If you've been searching high and low for the best coffee recipes to make at home, you're in the right place. We've got something for everyone - hot coffee recipes for those cold, rainy, wintery days, iced coffee recipes for sweltering hot summer days, a relaxed, easy-to-drink coffee for a golden afternoon, or a strong, rich coffee for that early morning. ");
        // section3
        $(".c1-recipe").text("AFFOGATO");
        $(".c2-recipe").text("CAPPUCCINO");
        $(".c3-recipe").text("ICED CAFE MOCHA");
        $(".c4-recipe").text("MOCHA FRAPPE");
        $(".c5-recipe").text("MOCHA MOUSSE");
        $(".c6-recipe").text("SALTED CARAMEL LATTE");
        $(".view-btn").text("View Recipe");
        $(".c1-d").text("Affogato means 'drowned' in Italian, which is because the ice cream is covered in an espresso shot. A true crowd pleaser that's easy to make!");
        $(".c-time").text("Prep: 5 minutes.");
        $(".nav1").text("Ingredients");
        $(".nav2").text("Required");
        $(".nav3").text("Steps");
        $(".c1-nav1-i1").text("2-3tsp NESCAFÉ AZERA Craft Coffee brewed with 200ml of freshly boiled water");
        $(".c1-nav1-i2").text("2 scoops of vanilla ice cream (can be substituted for dairy free alternative) (Contains milk)");
        $(".c1-nav1-i3").text("1 piece chocolate chopped or grated chocolate");
        $(".c1-nav2-r1").text("Small knife");
        $(".c1-nav2-r2").text("Ice cream scoop or spoon");
        $(".nav-2glasses").text("2 glasses, to serve");
        $(".nav2-allergy").text("Allergens in this recipe: Milk");
        $(".c1-nav3-s1").text("In a chilled glass or dessert dish, place a scoop of vanilla ice cream.");
        $(".c1-nav3-s2").text("Slowly pour the freshly brewed NESCAFÉ AZERA Craft Coffee over the ice cream.");
        $(".c1-nav3-s3").text("Garnish with chopped chocolate and serve immediately.");
        $(".c2-d").text("This simple, delicious recipe will have a cappuccino in your mug without a coffee machine, just the robust flavour of NESCAFÉ.");
        $(".c2-nav1-i1").text("1-2 tsps (2-4g) NESCAFÉ Original");
        $(".c2-nav1-i2").text("30ml (2 tbsps) freshly boiled waterred");
        $(".c2-nav1-i3").text("190ml semi-skimmed milk");
        $(".c2-nav1-i4").text("Nutmeg, cinnamon, or cocoa powder (optional)");
        $(".nav2-glassc").text("Glass container");
        $(".nav2-milkfr").text("Milk frother");
        $(".nav2-mug").text("Mug, to serve");
        $(".c2-nav3-s1").text("Mix the instant coffee and freshly boiled water. Stir it well and pour it into your mug of choice.");
        $(".c2-nav3-s2").text("Heat the milk in a glass container for 1 minute in a microwave and give it a stir once it is warmed up.");
        $(".c2-nav3-s3").text("Froth the hot milk for 2 minutes with a handheld frother. You are aiming for a foam layer that is 2 fingers thick,  35mm, to be precise.");
        $(".c2-nav3-s4").text("Pour the frothed milk into the coffee.");
        $(".c2-nav3-s5").text("Sprinkle with nutmeg, cinnamon, or cocoa, and serve immediately.");
        $(".c3-d").text("Create a wonderfully tasty drink with our iced cafe mocha recipe. Perfect for your morning coffee break or as an afternoon treat.");
        $(".c3-nav1-i1").text("6tsp NESCAFÉ GOLD BLEND brewed with 200ml of freshly boiled water");
        $(".c3-nav1-i2").text("200ml semi-skimmed milk or dairy-free alternative");
        $(".c3-nav1-i3").text("50g white chocolate chopped or white chocolate buttons (contains milk)");
        $(".c3-nav1-i4").text("2tbsp lightly whipped cream (optional)");
        $(".c3-nav1-i5").text("Nutmeg");
        $(".c3-nav2-r2").text("Heavy bottom pot");
        $(".c3-nav2-r3").text("Whisk");
        $(".c3-nav2-r4").text("Small grater");
        $(".c3-nav2-r5").text("2 mugs, to serve");
        $(".c3-nav3-s1").text("Add the milk and the white chocolate chips to a heavy bottom pot. Whisk together, on medium-low heat, until the white chocolate has melted.");
        $(".c3-nav3-s2").text("Add your freshly brewed NESCAFÉ GOLD BLEND to a cup or mug. Top up with the white chocolate milk and stir.");
        $(".c3-nav3-s3").text("If using top with lightly whipped cream and freshly grate nutmeg over the top. ");
        $(".c4-d").text("There's nothing better than a cooling mocha frappé on a hot day, so why not make your own? You can even add a dollop of cream for a perfectly sweet taste.");
        $(".c4-nav1-i1").text("4-8tsp NESCAFÉ AZERA My Way Latte brewed with 400ml of freshly boiled water and left to cool");
        $(".c4-nav1-i2").text("100ml semi-skimmed milk or dairy-free alternative");
        $(".c4-nav1-i3").text("2tbsp sugar syrup (mix 2tbsp sugar with 1tbsp boiling water, bring to the boil and stir until dissolved)");
        $(".c4-nav1-i4").text("2 handfuls ice cubes");
        $(".c4-nav1-i5").text("2tbsp lightly whipped cream (optional)");
        $(".c4-nav2-r1").text("Blender");
        $(".c4-nav3-s1").text("Add all the ingredients apart from the cream to a blender.");
        $(".c4-nav3-s2").text("Blend until foamy and the ice is broken down completely.");
        $(".c4-nav3-s3").text("Pour into a glass and spoon over the lightly whipped cream if using.");
        $(".c5-d").text("Stay cool! Our NESCAFÉ Mocha Mousse will refresh your body, mind, and soul.");
        $(".c5-nav1-i1").text("1-2 tsps (2-4g) NESCAFÉ GOLD BLEND");
        $(".c5-nav1-i2").text("30ml (2 tbsps) freshly boiled water");
        $(".c5-nav1-i3").text("110ml cold semi-skimmed milk");
        $(".c5-nav1-i4").text("7 medium ice cubes");
        $(".c5-nav1-i5").text("2 tsps (10ml) brown sugar (optional)");
        $(".c5-nav3-s1").text("Mix the instant coffee with the hot water. Add the sugar, if you are using it. Stir it well and set it aside.");
        $(".c5-nav3-s2").text("Fill a glass with ice cubes.");
        $(".c5-nav3-s3").text("Slowly pour in the coffee.");
        $(".c5-nav3-s4").text("Slowly stream in the milk.");
        $(".c6-d").text("An indulgently sweet drink with rich aromas of caramel, and the bold, invigorating flavours of NESCAFÉ.");
        $(".c6-nav1-i1").text("1-2 tsps (2-4g) NESCAFÉ instant coffee");
        $(".c6-nav1-i2").text("30ml (2 tbsps) freshly boiled water");
        $(".c6-nav1-i3").text("130ml semi-skimmed milk");
        $(".c6-nav1-i4").text("15ml sugar free caramel sauce");
        $(".c6-nav1-i5").text("1 tbsp whipped cream (optional)");
        $(".c6-nav3-s1").text("Mix the instant coffee with the hot water. Stir it well and set it aside.");
        $(".c6-nav3-s2").text("Combine the milk and caramel sauce in a glass container. Heat it for 1 minute in a microwave, until bubbles just appear. Give it a stir to mix it properly.");
        $(".c6-nav3-s3").text("Add the coffee brew to the caramel milk. Froth it for 30 seconds with a handheld frother to get the perfect velvety texture.");
        $(".c6-nav3-s4").text("Pour the Salted Caramel Latte into your cup. ");
        // section 4
        $(".r-faq").text("Frequently Asked Questions");
        $("#headingOne").text("How do you make really good coffee?");
        $(".a1").text("With NESCAFÉ it's easy. Take a look through our list of easy, at-home coffee recipes, give them a try, and you'll be on your way to finding your favourite way to enjoy NESCAFÉ. It's all about personal taste, and your new favourite might be waiting to be discovered. Give it a try and taste for yourself.");
        $("#headingOne").text("How do you make really good coffee?");
        $(".a1").text("With NESCAFÉ it's easy. Take a look through our list of easy, at-home coffee recipes, give them a try, and you'll be on your way to finding your favourite way to enjoy NESCAFÉ. It's all about personal taste, and your new favourite might be waiting to be discovered. Give it a try and taste for yourself.");
        $("#headingTwo").text("What are good coffee-based drinks to make at home?");
        $(".a2").text("There are so many coffee recipes to try making at home. You could try making a simple instant cappuccino, a caramel latte, or even a quick iced coffee to get yourself comfortable. Your new favourite coffee recipe is waiting for you to try it.");
        $("#headingThree").text(" What can I put in my coffee?");
        $(".a3").text("It is all about personal taste. You can add milk, or a plant-based alternative like oat drink to soften the bold flavours slightly. Since coffee is such a versatile drink, it works well with a lot of different flavours, so why not add a little sugar-free flavoured syrup to your coffee? Experiment with your favourite flavours and find out what works best for you.");

        // about page
        //  section 1
        $(".about-greet").text("THE NESCAFÉ STORY");
        $(".about-p1").text("Great Coffee since 1938");
        // section 2
        $(".about-title").text("About NESCAFÉ");
        $(".about-p2").text("In 1929, Nestlé was challenged to help preserve the surplus coffee beans in Brazil that resulted from the Wall Street Crash. And Nestlé accepted the challenge.");
        $(".about-p3").text("Our coffee specialist, Max Morgenthaler, was on a mission to create a delicious cup of coffee simply by adding water. Max and his team worked hard to find a new way to make instant coffee that would retain the coffee’s natural flavour. In 1938, they found the answer, and NESCAFÉ was born. Named by using the first three letters in Nestlé and suffixing it with ‘café’, NESCAFÉ became the new name in coffee.");
        // section 3
        $(".caption").text("World's Favorite Coffee");

        // contact page
        $(".name-l").text("NAME");
        $(".email-l").text("EMAIL");
        $(".send-btn").text("Send");
    });
});

//Spanish
$(function() {
    $(".fil").click(function() {
        //top-menu
        $(".language-selected").text("es");
        $(".sign-in").text("REGISTRARSE");
        $(".language-selected").removeClass("change-fr");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-ja");
        $(".language-selected").addClass("change-es");
        //offcanvas
        $(".offcanvas-title").text("Carrito de compras");
        $(".delivery-txt").text("Entrega");
        $(".delivery-price").text("€0");
        $(".total-txt").text("Total");
        $(".total-price").text("€ 0.00");
        $("#check-out").text("Pagar");
        $("#shop").text("Seguir comprando");

        // login
        $(".pass").text("Has Olvidado Tu Contraseña");
        $(".login-btn").text("Acceso");
        $(".reset-btn").text("Reiniciar");
        $(".alt-login").text("Iniciar Sesión Usando");
        
        // landing page
        //section 1
        $("#title").text("DESCUBRE UN SABOR MÁS RICO");
        $("#sub-title").text("Café más sabroso, nuevo Nescafé");
        $(".direction").text("Saber Más");
        // section 2
        $(".overview-title").text("La promesa de oro puro.");
        $(".overview-sub").text("Experimente el sabor inigualable de la Roastery.");
        $(".overview-p").text("NESCAFÉ GOLD BLEND Roastery Collection es una gama de tres nuevos cafés instantáneos premium para bebedores de café que buscan un café refinado y de alta calidad en casa. Cada una de las nuevas mezclas ha sido elaborada por los maestros tostadores de NESCAFÉ GOLD BLEND y le brinda la oportunidad de experimentar el sabor refinado del café tostado por expertos desde la comodidad de su hogar. ");
        $(".shop-btn").text("Compra Ahora");
        // section 3
        $(".sec3-p").text("Para las amantes del café.");
        // section 4
        $("#brand1").text("NESCAFÉ");
        $("#brand2").text("GOLD");
        $("#brand3").text("BLEND");
        $(".lr-coffee").text("ASADO LIGERO");
        $(".dr-coffee").text("TOSTADO OSCURO");
        $(".lrd-coffee").text("DESAFÍO DE TOSTADO CLARO");
        // section 5    
        $(".recipe-title").text("COLECCIÓN Roastery");
        $(".recipe-sub").text("PARA CADA EXPERIENCIA");
        $(".recipe-p").text("Desde batidos deliciosamente fríos hasta cócteles suaves y aterciopelados, intente hacer sus recetas favoritas de café NESCAFÉ en casa y comparta una instantánea de sus creaciones usando el hashtag #NescaféRecipes.");
        $(".recipe-btn").text("Ver todas las recetas");
        // section 7
        $(".footer-title").text("¿Te gusta lo que ves? ¡Ven, bebe con nosotros!");
        $(".contact-btn").text("Hablemos");
        $(".home-menu").text("HOGAR");
        $(".shop-menu").text("CAFÉS");
        $(".recipe-menu").text("RECETAS");
        $(".about-menu").text("SOBRE NOSOTRAS");
        $(".contact-menu").text("CONTÁCTENOS");
        $(".newsletter").text("BOLETIN INFORMATIVO");
        $(".sub-btn").text("SUSCRIBIR");

        // shop page
        $(".gb-coffee").text("MEZCLA DE ORO");
        $("#ngBrand").text("NESCAFÉ Mezcla Dorada");
        $(".sc-coffee").text("Café Suave");
        $(".ie-coffee").text("Expreso instantáneo");
        $(".nd-coffee").text("NON-DAIRY");
        $(".cl-coffee").text("Latte de coco");
        $(".ol-coffee").text("Latte de avena");
        $(".add-btn").text("Añadir al carrito");

        // recipes page
        // section 1
        $(".sec1-p").text("Recetas De Café");
        // section 2
        $(".recipe-overview").text("Comparte el sabor de la amistad.");
        $(".recipe-op").text("Si ha estado buscando por todas partes las mejores recetas de café para hacer en casa, está en el lugar correcto. Tenemos algo para todos: recetas de café caliente para esos días fríos, lluviosos e invernales, recetas de café helado para los sofocantes días calurosos de verano, un café relajado y fácil de beber para una tarde dorada o un café fuerte y rico para esa madrugada.");
        // section3
        $(".c1-recipe").text("AFOGADO");
        $(".c2-recipe").text("CAPUCHINO");
        $(".c3-recipe").text("MOCHA DE CAFÉ HELADO");
        $(".c4-recipe").text("MOCHA FRAPÉ");
        $(".c5-recipe").text("MOUSSE DE MOCA");
        $(".c6-recipe").text("LATTE DE CARAMELO SALADO");
        $(".view-btn").text("Ver la receta");
        $(".c1-d").text("Affogato significa 'ahogado' en italiano, lo que se debe a que el helado está cubierto con un espresso. Un verdadero placer para la multitud que es fácil de hacer!");
        $(".c-time").text("Preparación: 5 minutos.");
        $(".nav1").text("Ingredientes");
        $(".nav2").text("Requerida");
        $(".nav3").text("Pasos");
        $(".c1-nav1-i1").text("2-3 cucharaditas de café artesanal NESCAFÉ AZERA preparado con 200 ml de agua recién hervida");
        $(".c1-nav1-i2").text("2 bolas de helado de vainilla (se puede sustituir por una alternativa sin lácteos) (Contiene leche)");
        $(".c1-nav1-i3").text("1 trozo de chocolate troceado o rallado");
        $(".c1-nav2-r1").text("Cuchillo pequeño");
        $(".c1-nav2-r2").text("Cuchara o cuchara para helado");
        $(".nav-2glasses").text("2 vasos, para servir");
        $(".nav2-allergy").text("Alérgenos en esta receta: Leche");
        $(".c1-nav3-s1").text("En una copa o plato de postre frío, colocar una bola de helado de vainilla.");
        $(".c1-nav3-s2").text("Vierta lentamente el café artesanal NESCAFÉ AZERA recién preparado sobre el helado..");
        $(".c1-nav3-s3").text("Decorar con chocolate troceado y servir inmediatamente..");
        $(".c2-d").text("Esta sencilla y deliciosa receta tendrá un capuchino en su taza sin una máquina de café, solo el sabor fuerte de NESCAFÉ.");
        $(".c2-nav1-i1").text("1-2 cucharaditas (2-4 g) de NESCAFÉ Original");
        $(".c2-nav1-i2").text("30 ml (2 cucharadas) de agua recién hervida");
        $(".c2-nav1-i3").text("190ml leche semidesnatada");
        $(".c2-nav1-i4").text("Nuez moscada, canela o cacao en polvo (opcional)");
        $(".nav2-glassc").text("Contenedor de vidrio");
        $(".nav2-milkfr").text("Vaporizador de leche");
        $(".nav2-mug").text("Taza, para servir");
        $(".c2-nav3-s1").text("Mezcle el café instantáneo y el agua recién hervida. Revuelva bien y viértalo en la taza de su elección.");
        $(".c2-nav3-s2").text("Calienta la leche en un recipiente de cristal durante 1 minuto en el microondas y revuélvela una vez que se haya calentado.");
        $(".c2-nav3-s3").text("Espume la leche caliente durante 2 minutos con un vaporizador de mano. Su objetivo es una capa de espuma de 2 dedos de grosor, 35 mm, para ser precisos.");
        $(".c2-nav3-s4").text("Vierta la leche espumada en el café.");
        $(".c2-nav3-s5").text("Espolvorea con nuez moscada, canela o cacao y sirve de inmediato.");
        $(".c3-d").text("Crea una bebida maravillosamente sabrosa con nuestra receta de café moca helado. Perfecto para su descanso para tomar café por la mañana o como un regalo por la tarde.");
        $(".c3-nav1-i1").text("6 cucharaditas de NESCAFÉ GOLD BLEND preparado con 200 ml de agua recién hervida");
        $(".c3-nav1-i2").text("200 ml de leche semidesnatada o alternativa sin lácteos");
        $(".c3-nav1-i3").text("50g chocolate blanco troceado o botones de chocolate blanco (contiene leche)");
        $(".c3-nav1-i4").text("2 cucharadas de crema ligeramente batida (opcional)");
        $(".c3-nav1-i5").text("Nuez moscada");
        $(".c3-nav2-r2").text("Olla de fondo pesado");
        $(".c3-nav2-r3").text("Batidor");
        $(".c3-nav2-r4").text("Rallador Pequeño");
        $(".c3-nav2-r5").text("2 tazas, para servir");
        $(".c3-nav3-s1").text("Agregue la leche y las chispas de chocolate blanco a una olla de fondo grueso. Batir, a fuego medio-bajo, hasta que el chocolate blanco se haya derretido.");
        $(".c3-nav3-s2").text("Agregue su NESCAFÉ GOLD BLEND recién preparado a una taza o jarro. Rellenar con la leche con chocolate blanco y remover.");
        $(".c3-nav3-s3").text("Si usa la parte superior con crema ligeramente batida y nuez moscada recién rallada por encima.");
        $(".c4-d").text("No hay nada mejor que un refrescante frappé de moka en un día caluroso, entonces, ¿por qué no hacer el tuyo? Incluso puedes agregar una cucharada de crema para un sabor perfectamente dulce.");
        $(".c4-nav1-i1").text("4-8 cucharaditas NESCAFÉ AZERA My Way Latte preparado con 400 ml de agua recién hervida y dejado enfriar");
        $(".c4-nav1-i2").text("100 ml de leche semidesnatada o alternativa sin lácteos");
        $(".c4-nav1-i3").text("2 cucharadas de jarabe de azúcar (mezcle 2 cucharadas de azúcar con 1 cucharada de agua hirviendo, hierva y revuelva hasta que se disuelva)");
        $(".c4-nav1-i4").text("2 puñados de cubitos de hielo");
        $(".c4-nav1-i5").text("2 cucharadas de crema ligeramente batida (opcional)");
        $(".c4-nav2-r1").text("Licuadora");
        $(".c4-nav3-s1").text("Agrega todos los ingredientes excepto la crema a una licuadora.");
        $(".c4-nav3-s2").text("Mezcle hasta que esté espumoso y el hielo se rompa por completo.");
        $(".c4-nav3-s3").text("Vierta en un vaso y cubra con una cuchara la crema ligeramente batida si la usa.");
        $(".c5-d").text("¡Sigue así! Nuestro NESCAFÉ Mocha Mousse refrescará tu cuerpo, mente y alma.");
        $(".c5-nav1-i1").text("1-2 cucharaditas (2-4 g) DE NESCAFÉ GOLD BLEND");
        $(".c5-nav1-i2").text("30 ml (2 cucharadas) de agua recién hervida");
        $(".c5-nav1-i3").text("110 ml de leche semidesnatada fría");
        $(".c5-nav1-i4").text("7 cubitos de hielo medianos");
        $(".c5-nav1-i5").text("2 cucharaditas (10 ml) de azúcar moreno (opcional)");
        $(".c5-nav3-s1").text("Mezcla el café instantáneo con el agua caliente. Agregue el azúcar, si lo está usando. Remuévelo bien y déjalo a un lado.");
        $(".c5-nav3-s2").text("Llena un vaso con cubitos de hielo.");
        $(".c5-nav3-s3").text("Vierta lentamente el café.");
        $(".c5-nav3-s4").text("Vierta lentamente la leche.");
        $(".c6-d").text("Una bebida dulce indulgente con ricos aromas de caramelo y los sabores audaces y vigorizantes de NESCAFÉ.");
        $(".c6-nav1-i1").text("1-2 cucharaditas (2-4 g) de café instantáneo NESCAFÉ");
        $(".c6-nav1-i2").text("30 ml (2 cucharadas) de agua recién hervida");
        $(".c6-nav1-i3").text("130 ml de leche semidesnatada");
        $(".c6-nav1-i4").text("15 ml de salsa de caramelo sin azúcar");
        $(".c6-nav1-i5").text("1 cucharada de crema batida (opcional)");
        $(".c6-nav3-s1").text("Mezcla el café instantáneo con el agua caliente. Remuévelo bien y déjalo a un lado.");
        $(".c6-nav3-s2").text("Combine la leche y la salsa de caramelo en un recipiente de vidrio. Caliéntalo durante 1 minuto en un microondas, hasta que aparezcan burbujas. Remuévelo para que se mezcle bien.");
        $(".c6-nav3-s3").text("Agregue la infusión de café a la leche de caramelo. Espuma durante 30 segundos con un vaporizador de mano para obtener la textura aterciopelada perfecta.");
        $(".c6-nav3-s4").text("Vierta el Latte de caramelo salado en su taza. ");
        // section 4
        $(".r-faq").text("Preguntas Frecuentes");

        // about page
        //  section 1
        $(".about-greet").text("LA HISTORIA DE NESCAFÉ");
        $(".about-p1").text("Gran Café desde 1938");
        // section 2
        $(".about-title").text("Acerca de NESCAFÉ");
        $(".about-p2").text("En 1929, Nestlé fue desafiado a ayudar a preservar el excedente de granos de café en Brasil que resultó del desplome de Wall Street. Y Nestlé aceptó el desafío.");
        $(".about-p3").text("Nuestro especialista en café, Max Morgenthaler, tenía la misión de crear una deliciosa taza de café simplemente agregando agua. Max y su equipo trabajaron duro para encontrar una nueva forma de hacer café instantáneo que mantuviera el sabor natural del café. En 1938 encontraron la respuesta y nació NESCAFÉ. Nombrado usando las primeras tres letras en Nestlé y sufijándolo con 'café', NESCAFÉ se convirtió en el nuevo nombre en café.");
        // section 3
        $(".caption").text("Café favorito del mundo");

        // contact page
        $(".name-l").text("NOMBRE");
        $(".email-l").text("EMAIL");
        $(".send-btn").text("Enviar");
    });
});

//French
$(function() {
    $(".fr").click(function() {
        //Menu supérieur
        $(".language-selected").text("fr");
        $(".sign-in").text("CONNEXION");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-ja");
        $(".language-selected").addClass("change-fr");
        //offcanvas
        $(".offcanvas-title").text("Caddie");
        $(".delivery-txt").text("Livraison");
        $(".delivery-price").text("€0");
        $(".total-txt").text("Total");
        $(".total-price").text("€ 0.00");
        $("#check-out").text("Caisse");
        $("#shop").text("Continuer vos achats");

        // login
        $(".pass").text("Mot de passe oublié");
        $(".login-btn").text("Connexion");
        $(".reset-btn").text("Réinitialiser");
        $(".alt-login").text("Connexion en utilisant");
        
        // landing page
        //section 1
        $("#title").text("DÉCOUVREZ UN GOÛT PLUS RICHE");
        $("#sub-title").text("Café plus savoureux, nouveau Nescafé");
        $(".direction").text("En savoir plus");
         // section 2
        $(".overview-title").text("La promesse de l’or pur.");
        $(".overview-sub").text("Découvrez la saveur inégalée de la torréfaction.");
        $(".overview-p").text("NESCAFÉ GOLD BLEND Roastery Collection est une gamme de trois nouveaux cafés instantanés haut de gamme pour les buveurs de café à la recherche d’un café raffiné et de haute qualité à la maison. Chacun des nouveaux mélanges a été élaboré par les maîtres torréfacteurs NESCAFÉ GOLD BLEND et vous donne l’occasion de découvrir le goût raffiné du café torréfié de manière experte dans le confort de votre foyer.");
        $(".shop-btn").text("Achetez Maintenant");
        // section 3
        $(".sec3-p").text("Pour les amateurs de café.");
         // section 4
        $("#brand1").text("NESCAFÉ");
        $("#brand2").text("GOLD");
        $("#brand3").text("BLEND");
        $(".lr-coffee").text("RÔTI LÉGER");
        $(".dr-coffee").text("TORRÉFACTION FONCÉE");
        $(".lrd-coffee").text("DÉCAFÉ LÉGER");
        // section 5    
        $(".recipe-title").text("COLLECTION Torréfaction");
        $(".recipe-sub").text("POUR CHAQUE EXPÉRIENCE");
        $(".recipe-p").text("FDes smoothies délicieusement frais aux cocktails veloutés, essayez de préparer vos recettes de café NESCAFÉ préférées à la maison et partagez un instantané de vos créations en utilisant le hashtag #NescafeRecipes.");
        $(".recipe-btn").text("Voir toutes les recettes");
        // section 7
        $(".footer-title").text("Aimez ce que vous voyez? Venez siroter avec nous!");
        $(".contact-btn").text("Parlons");
        $(".home-menu").text("DOMICILE");
        $(".shop-menu").text("CAFÉS");
        $(".recipe-menu").text("RECETTES");
        $(".about-menu").text("À PROPOS DE NOUS");
        $(".contact-menu").text("NOUS CONTACTER");
        $(".newsletter").text("BULLETIN");
        $(".sub-btn").text("S'ABONNER");

        // shop page
        $(".gb-coffee").text("MÉLANGE D'OR");
        $("#ngBrand").text("Melange NESCAFÉ Or");
        $(".sc-coffee").text("Café onctueux");
        $(".ie-coffee").text("Espresso instantané");
        $(".nd-coffee").text("NON LAITIÈRE");
        $(".cl-coffee").text("Latte à la noix de coco");
        $(".ol-coffee").text("Avoine Latte");
        $(".add-btn").text("Ajouter au chariot");

        // recipes page
        // section 1
        $(".sec1-p").text("Recettes de café");
         // section 2
        $(".recipe-overview").text("Partagez le goût de l'amitié.");
        $(".recipe-op").text(" Si vous avez cherché partout les meilleures recettes de café à faire à la maison, vous êtes au bon endroit. Nous avons quelque chose pour tout le monde : des recettes de café chaud pour les jours froids, pluvieux et hivernaux, des recettes de café glacé pour les chaudes journées d'été, un café décontracté et facile à boire pour un après-midi doré, ou un café fort et riche pour ce petit matin. ");
        // section3
        $(".c1-recipe").text("AFFOGATO");
        $(".c2-recipe").text("CAPPUCCINO");
        $(".c3-recipe").text("CAFÉ GLACÉ MOKA");
        $(".c4-recipe").text("FRAPPE MOKA");
        $(".c5-recipe").text("MOKA MOUSSE");
        $(".c6-recipe").text("LATTE AU CARAMEL SALÉ");
        $(".view-btn").text("Voir la recette");
        $(".c1-d").text("Affogato signifie « noyé » en italien, car la glace est recouverte d'un expresso. Un vrai plaisir de foule facile à faire!");
        $(".c-time").text("Préparation : 5 minutes.");
        $(".nav1").text("Ingrédients");
        $(".nav2").text("Obligatoire");
        $(".nav3").text("Pas");
        $(".c1-nav1-i1").text("2-3 cuillères à café de café artisanal NESCAFÉ AZERA infusé avec 200 ml d'eau fraîchement bouillie");
        $(".c1-nav1-i2").text("2 boules de glace à la vanille (peut être remplacée par une alternative sans produits laitiers) (Contient du lait)");
        $(".c1-nav1-i3").text("1 morceau de chocolat haché ou râpé");
        $(".c1-nav2-r1").text("Petit couteau");
        $(".c1-nav2-r2").text("Cuillère ou cuillère à glace");
        $(".nav-2glasses").text("2 verres, pour servir");
        $(".nav2-allergy").text("Allergènes dans cette recette : Lait");
        $(".c1-nav3-s1").text("Dans un verre ou un plat à dessert refroidi, déposer une boule de glace à la vanille.");
        $(".c1-nav3-s2").text("Versez lentement le café artisanal NESCAFÉ AZERA fraîchement infusé sur la crème glacée.");
        $(".c1-nav3-s3").text("Garnir de chocolat haché et servir immédiatement.");
        $(".c2-d").text("Cette recette simple et délicieuse aura un cappuccino dans votre tasse sans machine à café, juste la saveur robuste de NESCAFÉ.");
        $(".c2-nav1-i1").text("1-2 cuillères à café (2-4g) NESCAFÉ Original");
        $(".c2-nav1-i2").text("30 ml (2 c. à soupe) d'eau rouge fraîchement bouillie");
        $(".c2-nav1-i3").text("190 ml de lait demi-écrémé");
        $(".c2-nav1-i4").text("Noix de muscade, cannelle ou poudre de cacao (facultatif)");
        $(".nav2-glassc").text("Récipient en verre");
        $(".nav2-milkfr").text("Mousseur à lait");
        $(".nav2-mug").text("Mug, pour servir");
        $(".c2-nav3-s1").text("Mélangez le café instantané et l'eau fraîchement bouillie. Remuez bien et versez-le dans la tasse de votre choix.");
        $(".c2-nav3-s2").text("Faites chauffer le lait dans un récipient en verre pendant 1 minute au micro-ondes et remuez-le une fois qu'il est réchauffé.");
        $(".c2-nav3-s3").text("Faire mousser le lait chaud pendant 2 minutes avec un mousseur à main. Vous visez une couche de mousse de 2 doigts d'épaisseur, 35 mm, pour être précis.");
        $(".c2-nav3-s4").text("Versez la mousse de lait dans le café.");
        $(".c2-nav3-s5").text("Saupoudrez de noix de muscade, de cannelle ou de cacao et servez immédiatement.");
        $(".c3-d").text("Créez une boisson merveilleusement savoureuse avec notre recette de café moka glacé. Parfait pour votre pause-café du matin ou comme gâterie de l'après-midi.");
        $(".c3-nav1-i1").text("6 cuillères à café de NESCAFÉ GOLD BLEND infusé avec 200 ml d'eau fraîchement bouillie");
        $(".c3-nav1-i2").text("200 ml de lait demi-écrémé ou une alternative sans produits laitiers");
        $(".c3-nav1-i3").text("50 g de chocolat blanc haché ou de boutons de chocolat blanc (contient du lait)");
        $(".c3-nav1-i4").text("2 cuillères à soupe de crème légèrement fouettée (facultatif)");
        $(".c3-nav1-i5").text("Noix de muscade");
        $(".c3-nav2-r2").text("Pot à fond épais");
        $(".c3-nav2-r3").text("Fouet");
        $(".c3-nav2-r4").text("Petite râpe");
        $(".c3-nav2-r5").text("2 tasses, pour servir");
        $(".c3-nav3-s1").text("Ajouter le lait et les pépites de chocolat blanc dans une casserole à fond épais. Fouetter ensemble, à feu moyen-doux, jusqu'à ce que le chocolat blanc ait fondu.");
        $(".c3-nav3-s2").text("Ajoutez votre NESCAFÉ GOLD BLEND fraîchement infusé dans une tasse ou un mug. Compléter avec le lait au chocolat blanc et remuer.");
        $(".c3-nav3-s3").text("Si vous l'utilisez, recouvrez de crème légèrement fouettée et de noix de muscade fraîchement râpée sur le dessus. ");
        $(".c4-d").text("Il n'y a rien de mieux qu'un moka frappé rafraîchissant par une chaude journée, alors pourquoi ne pas en faire vous-même ? Vous pouvez même ajouter une cuillerée de crème pour un goût parfaitement sucré.");
        $(".c4-nav1-i1").text("4-8 c. à thé NESCAFÉ AZERA My Way Latte infusé avec 400 ml d'eau fraîchement bouillie et laissé refroidir");
        $(".c4-nav1-i2").text("100 ml de lait demi-écrémé ou une alternative sans produits laitiers");
        $(".c4-nav1-i3").text("2 cuillères à soupe de sirop de sucre (mélanger 2 cuillères à soupe de sucre avec 1 cuillère à soupe d'eau bouillante, porter à ébullition et remuer jusqu'à dissolution)");
        $(".c4-nav1-i4").text("2 poignées de glaçons");
        $(".c4-nav1-i5").text("2 cuillères à soupe de crème légèrement fouettée (facultatif)");
        $(".c4-nav2-r1").text("Mixeur");
        $(".c4-nav3-s1").text("Mettre tous les ingrédients sauf la crème dans un blender.");
        $(".c4-nav3-s2").text("Mélanger jusqu'à ce qu'il soit mousseux et que la glace soit complètement dissoute.");
        $(".c4-nav3-s3").text("Versez dans un verre et versez sur la crème légèrement fouettée si vous en utilisez.");
        $(".c5-d").text("Reste calme! Notre Mousse Moka NESCAFÉ rafraîchira votre corps, votre esprit et votre âme.");
        $(".c5-nav1-i1").text("1-2 c. à thé (2-4 g) MÉLANGE NESCAFÉ GOLD");
        $(".c5-nav1-i2").text("30 ml (2 cuillères à soupe) d'eau fraîchement bouillie");
        $(".c5-nav1-i3").text("110 ml de lait demi-écrémé froid");
        $(".c5-nav1-i4").text("7 medium ice cubes7 glaçons moyens");
        $(".c5-nav1-i5").text("2 c. à thé (10 ml) de cassonade (facultatif)");
        $(".c5-nav3-s1").text("Mélanger le café instantané avec l'eau chaude. Ajouter le sucre, si vous en utilisez. Remuez bien et mettez de côté.");
        $(".c5-nav3-s2").text("Remplir un verre de glaçons.");
        $(".c5-nav3-s3").text("Versez lentement le café.");
        $(".c5-nav3-s4").text("Versez lentement le lait.");
        $(".c6-d").text("Une boisson délicieusement sucrée aux riches arômes de caramel et aux saveurs audacieuses et revigorantes de NESCAFÉ.");
        $(".c6-nav1-i1").text("1-2 c. à thé (2-4 g) de café instantané NESCAFÉ");
        $(".c6-nav1-i2").text("30 ml (2 cuillères à soupe) d'eau fraîchement bouillie");
        $(".c6-nav1-i3").text("130 ml de lait demi-écrémé");
        $(".c6-nav1-i4").text("15 ml de sauce caramel sans sucre");
        $(".c6-nav1-i5").text("1 cuillère à soupe de crème fouettée (facultatif)");
        $(".c6-nav3-s1").text("Mélanger le café instantané avec l'eau chaude. Remuez bien et mettez de côté.");
        $(".c6-nav3-s2").text("Mélanger le lait et la sauce au caramel dans un récipient en verre. Chauffez-le pendant 1 minute au micro-ondes, jusqu'à ce que des bulles apparaissent. Remuez-le pour bien le mélanger.");
        $(".c6-nav3-s3").text("Ajouter l'infusion de café au lait au caramel. Faites mousser pendant 30 secondes avec un mousseur à main pour obtenir la texture veloutée parfaite.");
        $(".c6-nav3-s4").text("Versez le Latte Caramel Salé dans votre tasse. ");
        // section 4
        $(".r-faq").text("Questions fréquemment posées");

        // about page
        //  section 1
        $(".about-greet").text("L'HISTOIRE DE NESCAFÉ");
        $(".about-p1").text("Grand café depuis 1938");
        // section 2
        $(".about-title").text("À propos de NESCAFÉ");
        $(".about-p2").text("En 1929, Nestlé a été mis au défi d'aider à préserver le surplus de grains de café au Brésil résultant du crash de Wall Street. Et Nestlé a accepté le défi.");
        $(".about-p3").text("Notre spécialiste du café, Max Morgenthaler, avait pour mission de créer une délicieuse tasse de café simplement en ajoutant de l'eau. Max et son équipe ont travaillé dur pour trouver une nouvelle façon de faire du café instantané qui conserverait la saveur naturelle du café. En 1938, ils ont trouvé la réponse et NESCAFÉ est né. Nommé en utilisant les trois premières lettres de Nestlé et en le suffixant avec café, NESCAFÉ est devenu le nouveau nom du café.");
        // section 3
        $(".caption").text("Le café préféré du monde");

        // contact page
        $(".name-l").text("NOM");
        $(".email-l").text("COURRIEL");
        $(".send-btn").text("Envoyer");
    });
});

//Japanese
$(function() {
    $(".ja").click(function() {
        //top-menu
        $(".language-selected").text("ja");
        $(".sign-in").text("サインイン");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-fr");
        $(".language-selected").addClass("change-ja");
        //offcanvas
        $(".offcanvas-title").text("ショッピングカート");
        $(".delivery-txt").text("配達");
        $(".delivery-price").text("¥0");
        $(".total-txt").text("トータル");
        $(".total-price").text("¥ 0.00");
        $("#check-out").text("チェックアウト");
        $("#shop").text("買い物を続ける");

        // login
        $(".pass").text("パスワードを忘れた");
        $(".login-btn").text("ログイン");
        $(".reset-btn").text("リセット");
        $(".alt-login").text("ログイン方法");
        
        // landing page
        //section 1
        $("#title").text("より豊かな味を発見する");
        $("#sub-title").text("よりおいしいコーヒー、新しいネスカフェ");
        $(".direction").text("さらに詳しく");
        // section 2
        $(".overview-title").text("純金の約束。");
        $(".overview-sub").text("ロースタリーの比類のない味を体験してください。");
        $(".overview-p").text("ネスカフェゴールドブレンドロースタリーコレクションは、自宅で洗練された高品質のコーヒーを探しているコーヒーを飲む人のための3つの新しいプレミアムインスタントコーヒーの範囲です。新しいブレンドはそれぞれ、ネスカフェゴールドブレンドマスターロースターによって作られており、自宅の快適さから巧みに焙煎されたコーヒーの洗練された味を体験する機会を与えてくれます。");
        $(".shop-btn").text("今すぐ購入");
        // section 3
        $(".sec3-p").text("コーヒー好きの方へ。");
        // section 4
        $(".lr-coffee").text("ライトロースト");
        $(".dr-coffee").text("ダークロースト");
        $(".lrd-coffee").text("ライトロースト デカフェ");
        // section 5    
        $(".recipe-title").text("ロースタリー コレクション");
        $(".recipe-sub").text("すべての経験のために");
        $(".recipe-p").text("おいしく冷やしたスムージーからビロードのように滑らかなカクテルまで、自宅でお気に入りのネスカフェ コーヒー レシピを作ってみて、ハッシュタグ #NescafeRecipes を使ってあなたの作品のスナップを共有してください。");
        $(".recipe-btn").text("すべてのレシピを見る");
        // section 7
        $(".footer-title").text("あなたが見るもののように？ さあ、一緒に飲みましょう！");
        $(".contact-btn").text("レッツトーク");
        $(".home-menu").text("家");
        $(".shop-menu").text("コーヒー");
        $(".recipe-menu").text("レシピ");
        $(".about-menu").text("私たちに関しては");
        $(".contact-menu").text("お問い合わせ");
        $(".newsletter").text("ニュースレター");
        $(".sub-btn").text("申し込む");
        
        // shop page
        $(".gb-coffee").text("ゴールドブレンド");
        $("#ngBrand").text("ネスカフェ ゴールドブレンド");
        $(".sc-coffee").text("スムースコーヒー");
        $(".ie-coffee").text("インスタントエスプレッソ");
        $(".nd-coffee").text("非乳製品");
        $(".cl-coffee").text("ココナッツラテ");
        $(".ol-coffee").text("オートラテ");
        $(".add-btn").text("カートに追加");

        // recipes page
        // section 1
        $(".sec1-p").text("コーヒーレシピ");
         // section 2
        $(".recipe-overview").text("友情の味を分かち合いましょう");
        $(".recipe-op").text("自宅で作るのに最適なコーヒーのレシピを高低で検索しているなら、あなたは正しい場所にいます. 寒い雨の日や冬の日のためのホット コーヒーのレシピ、うだるように暑い夏の日のためのアイス コーヒーのレシピ、黄金の午後のためのリラックスした飲みやすいコーヒー、または、 その早朝。");
        // section3
        $(".c1-recipe").text("アフォガート");
        $(".c2-recipe").text("カプチーノ");
        $(".c3-recipe").text("アイスカフェモカ");
        $(".c4-recipe").text("モカフラッペ");
        $(".c5-recipe").text("モカムース");
        $(".c6-recipe").text("塩キャラメルラテ");
        $(".view-btn").text("レシピを見る");
        $(".c1-d").text("アフォガートはイタリア語で「溺れた」という意味で、アイスクリームにエスプレッソショットがかかっているからです。 簡単に作ることができる真の群衆を喜ばせます！");
        $(".c-time").text("準備: 5 分。");
        $(".nav1").text("材料");
        $(".nav2").text("必須");
        $(".nav3").text("手順");
        $(".c1-nav1-i1").text("200mlの沸かしたてのお湯で淹れたネスカフェ アゼラ クラフトコーヒー小さじ2～3杯");
        $(".c1-nav1-i2").text("バニラアイスクリーム 2スクープ（乳製品を含まない代替品で代用可能）（牛乳を含む）");
        $(".c1-nav1-i3").text("刻んだチョコレートまたはすりおろしたチョコレート 1 ピース");
        $(".c1-nav2-r1").text("小刀");
        $(".c1-nav2-r2").text("アイスクリームスクープまたはスプーン");
        $(".nav-2glasses").text("グラス2杯");
        $(".nav2-allergy").text("このレシピに含まれるアレルギー物質: 牛乳");
        $(".c1-nav3-s1").text("冷やしたグラスまたはデザート皿に、バニラアイスクリームを1スクープ入れます。");
        $(".c1-nav3-s2").text("アイスクリームの上に、淹れたての「ネスカフェ アゼラ クラフトコーヒー」をゆっくり注ぎます。");
        $(".c1-nav3-s3").text("刻んだチョコレートを飾り、すぐにお召し上がりください。");
        $(".c2-d").text("このシンプルでおいしいレシピは、ネスカフェの濃厚な風味だけで、コーヒーマシンなしでマグカップにカプチーノを入れます.");
        $(".c2-nav1-i1").text("小さじ1～2（2～4g）ネスカフェオリジナル");
        $(".c2-nav1-i2").text("沸かしたての水 赤 30ml（大さじ2）");
        $(".c2-nav1-i3").text("セミスキムミルク 190ml");
        $(".c2-nav1-i4").text("ナツメグ、シナモン、またはココア パウダー (オプション)");
        $(".nav2-glassc").text("ガラス容器");
        $(".nav2-milkfr").text("ミルク泡立て器");
        $(".nav2-mug").text("マグカップ");
        $(".c2-nav3-s1").text("インスタントコーヒーと沸かしたてのお湯を混ぜます。 よくかき混ぜて、お好みのマグカップに注ぎます。");
        $(".c2-nav3-s2").text("牛乳をガラス容器に入れて電子レンジで1分加熱し、あら熱がとれたらかき混ぜます。");
        $(".c2-nav3-s3").text("ハンドヘルド泡立て器でホットミルクを2分間泡立てます。 正確には、指 2 本の厚さ、35mm のフォーム層を目指しています。");
        $(".c2-nav3-s4").text("泡立てたミルクをコーヒーに注ぎます。");
        $(".c2-nav3-s5").text("ナツメグ、シナモン、またはココアをふりかけて、すぐにお召し上がりください。");
        $(".c3-d").text("アイスカフェモカのレシピで、すばらしくおいしいドリンクを作りましょう。 朝のコーヒーブレイクや午後のおやつに最適です。");
        $(".c3-nav1-i1").text("200mlの沸かしたてのお湯で抽出したネスカフェ ゴールドブレンド 小さじ6");
        $(".c3-nav1-i2").text("セミスキムミルクまたは乳製品を含まない代替品 200ml");
        $(".c3-nav1-i3").text("ホワイトチョコレート チョップまたはホワイトチョコレート ボタン 50g (ミルクを含む)");
        $(".c3-nav1-i4").text("軽くホイップした生クリーム（お好みで）大さじ2");
        $(".c3-nav1-i5").text("ナツメグ");
        $(".c3-nav2-r2").text("重底鍋");
        $(".c3-nav2-r3").text("泡だて器");
        $(".c3-nav2-r4").text("小おろし金");
        $(".c3-nav2-r5").text("マグカップ 2 杯");
        $(".c3-nav3-s1").text("底の重い鍋に牛乳とホワイトチョコチップを入れます。 ホワイトチョコレートが溶けるまで中火～弱火で泡だて器で混ぜます。");
        $(".c3-nav3-s2").text("淹れたての「ネスカフェ ゴールドブレンド」をカップやマグカップに。 ホワイトチョコレートミルクを入れてかき混ぜます。");
        $(".c3-nav3-s3").text("上に軽くホイップしたクリームをのせ、上からナツメグをすりおろします。 ");
        $(".c4-d").text("暑い日にひんやりモカフラッペは格別です。自分で作ってみませんか？ 完全に甘い味のためにクリームの塊を追加することもできます.");
        $(".c4-nav1-i1").text("ネスカフェ アゼラ マイ ウェイ ラテ 小さじ 4 ～ 8 杯");
        $(".c4-nav1-i2").text("セミスキムミルクまたは乳製品を含まない代替品 100ml");
        $(".c4-nav1-i3").text("砂糖大さじ2（砂糖大さじ2と熱湯大さじ1を混ぜて沸騰させ、溶けるまでかき混ぜます）");
        $(".c4-nav1-i4").text("アイスキューブ 2握り");
        $(".c4-nav1-i5").text("軽くホイップした生クリーム（お好みで）大さじ2");
        $(".c4-nav2-r1").text("ブレンダー");
        $(".c4-nav3-s1").text("生クリーム以外の材料をすべてブレンダーに入れる。");
        $(".c4-nav3-s2").text("泡立ち、氷が完全に崩れるまでブレンドします。");
        $(".c4-nav3-s3").text("グラスに注ぎ、軽くホイップしたクリームをスプーンでかけます。");
        $(".c5-d").text("平静を保つ！ ネスカフェのモカムースで、身も心もリフレッシュ。");
        $(".c5-nav1-i1").text("小さじ1～2（2～4g）ネスカフェゴールドブレンド");
        $(".c5-nav1-i2").text("沸かしたての水 30ml（大さじ2）");
        $(".c5-nav1-i3").text("冷たいセミスキムミルク 110ml");
        $(".c5-nav1-i4").text("中型氷 7個");
        $(".c5-nav1-i5").text("ブラウンシュガー 小さじ2（10ml）（お好みで）");
        $(".c5-nav3-s1").text("インスタントコーヒーとお湯を混ぜます。 砂糖を使う場合は加えてください。 よくかき混ぜて、脇に置きます。");
        $(".c5-nav3-s2").text("グラスに氷を入れます。");
        $(".c5-nav3-s3").text("コーヒーをゆっくり注ぎます。");
        $(".c5-nav3-s4").text("ゆっくりと牛乳を注ぎます。");
        $(".c6-d").text("キャラメルの芳醇な香りと、ネスカフェの大胆で爽快な味わいが特徴の、甘さ控えめのドリンクです。");
        $(".c6-nav1-i1").text("ネスカフェのインスタントコーヒー 小さじ1～2（2～4g）");
        $(".c6-nav1-i2").text("沸かしたての水 30ml（大さじ2）");
        $(".c6-nav1-i3").text("セミスキムミルク 130ml");
        $(".c6-nav1-i4").text("無糖キャラメルソース 15ml");
        $(".c6-nav1-i5").text("ホイップクリーム 大さじ1（お好みで）");
        $(".c6-nav3-s1").text("インスタントコーヒーとお湯を混ぜます。 よくかき混ぜて、脇に置きます。");
        $(".c6-nav3-s2").text("ガラス容器に牛乳とキャラメルソースを入れて混ぜる。 電子レンジで1分ほど、泡が立つまで加熱する。 よくかき混ぜてよく混ぜてください。");
        $(".c6-nav3-s3").text("コーヒーブリューをキャラメルミルクに加えます。 ハンドヘルド泡立て器で30秒間泡立てて、完璧なビロードのような食感にします.");
        $(".c6-nav3-s4").text("塩キャラメルラテをカップに注ぎます。");
        // section 4
        $(".r-faq").text("よくある質問");

        // about page
        //  section 1
        $(".about-greet").text("ネスカフェストーリー");
        $(".about-p1").text("1938年以来の素晴らしいコーヒー");
        // section 2
        $(".about-title").text("ネスカフェについて");
        $(".about-p2").text("1929 年、ネスレは、ウォール街の暴落の結果、ブラジルで余剰となったコーヒー豆を保存するための支援を求められました。 そしてネスレは挑戦を受け入れました。");
        $(".about-p3").text("コーヒーのスペシャリストであるマックス・モーゲンターラーは、水を加えるだけで美味しいコーヒーを淹れることを使命としていました。 マックスと彼のチームは、コーヒーの自然な風味を保持するインスタント コーヒーを作る新しい方法を見つけるために懸命に働きました。 1938年、彼らはその答えを見つけ、ネスカフェが誕生しました。 ネスレの最初の 3 文字に「カフェ」を付けて名付けられたネスカフェは、コーヒーの新しい名前になりました。");
        // section 3
        $(".caption").text("世界一好きなコーヒー");

        // contact page
        $(".name-l").text("名前");
        $(".email-l").text("メール");
        $(".send-btn").text("送信");
    });
});


