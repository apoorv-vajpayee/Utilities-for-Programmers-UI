export default function Navbar(){
    return <nav className="nav">
    <a href='/' className="home">Utilities for Programmers</a>
	<ul>
		<li>
			<a href="/tinyUrl">URL Shortener</a>
		</li>
		<li>
			<a href="/jsonCorrector">JSON Corrector</a>
		</li>
		<li>
			<a href="/wordCounter">Word Counter</a>
		</li>
		<li>
			<a href='charCounter'>Character Counter</a>
		</li>
		<li>
			<a href="/UnixTimestamp">Unix Timestamp</a>
		</li>
		<li>
			<a href="base64">Base 64 Encoder Decoder</a>
		</li>
	</ul>
    
    </nav>
}