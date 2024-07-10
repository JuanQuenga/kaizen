<script>
	import ProductItem from './Products/ProductItem.svelte';
</script>

<section class="bg-white py-8">
	<div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
		<nav id="store" class="w-full z-30 top-0 px-6 py-1">
			<div
				class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
			>
				<a
					class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
					href="#"
				>
					Current Products
				</a>

				<div class="flex items-center" id="store-nav-content">
					<a class="pl-3 inline-block no-underline hover:text-black" href="#">
						<svg
							class="fill-current hover:text-black"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
						</svg>
					</a>

					<a class="pl-3 inline-block no-underline hover:text-black" href="#">
						<svg
							class="fill-current hover:text-black"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</nav>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
			<ProductItem
				name="Tools Tray"
				src="https://fbi.cults3d.com/uploaders/13667141/illustration-file/cf4956c7-3b1a-4d47-9598-7aad8f9a5811/Tools_Tray_6.jpg"
			/>
			<ProductItem
				name="Pencil Holder"
				src="https://fbi.cults3d.com/uploaders/13667141/illustration-file/a53c1f78-6e89-4bc8-b609-77ded6ef3364/20190908_180010.jpg"
			/>
			<ProductItem
				name="Modular Display Shelf"
				src="https://fbi.cults3d.com/uploaders/23225542/illustration-file/b794f020-b166-44e1-9420-aca05e4af613/IMG_20240703_051736.jpg"
			/>
			<ProductItem
				name="Modular Battery Pack"
				src="https://fbi.cults3d.com/uploaders/27041040/illustration-file/3ca6cfb0-761f-4460-b274-6539d07adfe1/DSC_0018.jpg"
			/>

			<ProductItem
				name="CNC Pen Plotter"
				src="https://fbi.cults3d.com/uploaders/16394868/illustration-file/928995cb-b96a-4412-a306-a47f86488acc/DIY-Pen-Plotter-or-CNC-Drawing-Machine-with-Automatic-Tool-Changer-by-HowToMechatronics.jpg"
			/>
			<ProductItem
				name="K1 Fan Shroud"
				src="https://fbi.cults3d.com/uploaders/29003947/illustration-file/3e949f60-4d0e-4f37-835e-45c76a8e3184/1000014525.jpg"
			/>
			<ProductItem
				name="Pegboard Containers"
				src="https://fbi.cults3d.com/uploaders/30965519/illustration-file/fdf78eaf-6157-4072-b7f1-3f81dd57b741/SKADIS-Behaelter-und-Haken-Variante-im-Boho-Korb-Design-offen.jpg"
			/>
			<ProductItem
				name="Filament Display"
				src="https://fbi.cults3d.com/uploaders/24859911/illustration-file/0a44be92-157e-42b7-b94d-41d2354c6f1a/muestra-color.jpg"
			/>
		</div>
	</div>
</section>
