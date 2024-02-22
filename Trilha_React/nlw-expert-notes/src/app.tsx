import logo from './assets/Logo-NLW-Expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

/*=================>Opcional
const note = {
	date: new Date(),
	content: "Podemos utilizar o pacote chalk para exibir logs no código coloridos para dar um efeito mais legal no terminal. Pdemos trocar tanto a cor do texto quanto a cor de fundo texto impresso no console."
}
*/
export function App() {
	return (
		<div className='mx-auto max-w-6xl my-12 space-y-6'>
			<img src={logo} alt="Logo NLW Expert" />
			<form className='w-full'>
				<input
					type="text"
					placeholder='Busque em suas notas'
					className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500' />
			</form>
			<div className='h-px bg-slate-700'></div>

			<div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
				<NewNoteCard />
				<NoteCard note={{
					date: new Date(),
					content: "O Drizzie possui um plugin do ESLint para evitar que realizaremos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo: "
				}} />
				<NoteCard note={{
					date: new Date(),
					content: "No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio."
				}} />
				<NoteCard note={{
					date: new Date(),
					content: "Podemos utilizar o pacote chalk para exibir logs no código coloridos para dar um efeito mais legal no terminal. Podemos trocar tanto a cor do texto quanto a cor de fundo texto impresso no console."
				}} />
			</div>
		</div>
	)
}