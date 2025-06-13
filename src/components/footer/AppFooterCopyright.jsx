function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				{/* <a
					href="https://alexis-tompkins.vercel.app"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Personal Portfolio
				</a> */}
				<span> -</span>
				<a
					href="https://github.com/eross220"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Pham Van Huy
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;