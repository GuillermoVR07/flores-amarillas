import { SquareChevronLeft, SquareChevronRight, Image, MailQuestion, Flower, FileHeart } from 'lucide-react';
import React, { createContext, useContext } from 'react';
import useExpanded from '../../hooks/useExpanded';
import { Link } from 'react-router-dom';

const SidebarContext = createContext()

// PRIMER COMPONENTE DE TRES

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useExpanded()
  return (
    <aside className="h-screen">
      <nav className="h-full inline-flex flex-col bg-white border-r shadow-sm">
        <div className="px-4 py-2 pb-2 flex justify-between items-center">
          <div className="flex justify-center w-full">
            <img
              src="https://res.cloudinary.com/dvfntaopk/image/upload/f_auto,q_auto/v1/21-septiembre/dxnz1czmpgm3bu5diwyu"
              className={`
        overflow-hidden transition-all
        ${expanded ? "w-32" : "w-0"}
      `}
              alt=""
            />
          </div>
          <button
            onClick={() => setExpanded(curr => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <SquareChevronLeft /> : <SquareChevronRight />}
          </button>
        </div>


        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=Marcela+Butron"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className={`
                  flex justify-between items-center
                  overflow-hidden transition-all 
                  ${expanded ? "w-52 ml-3" : "w-0"}
          `}>
            <div className="leading-4">
              <h4 className="font-semibold text-sm">Marcelita Butron</h4>
              <span className="text-xs text-gray-600">marcela.butron57@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

// SEGUNDO COMPONENTE DE TRES

export function SidebarItem({ icon, text, to, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  return (
    <li className="relative">
      <Link to={to} className={`
        flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group no-underline
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
        }
      `}>
        {icon}
        <span className={`
              overflow-hidden transition-all
              ${expanded ? "w-52 ml-3" : "w-0 h-0"}
            `}>
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 
          ${expanded ? "" : "top-2"}`}
          />
        )}

        {!expanded && <div className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}>
          {text}
        </div>}
      </Link>
    </li>
  )
}

// TERCER COMPONENTE DE TRES

export const ItemsSidebar = () => {
  return (
    <>
      <SidebarItem icon={<Image size={20} />} text="Fotitos" to="/fotitos" />
      <SidebarItem icon={<MailQuestion size={20} />} text="Carta - 21 de Septiembre" to="/carta" active />
      <SidebarItem icon={<Flower size={20} />} text="Flores Amarillas" to="/florcita" />
      <SidebarItem icon={<FileHeart size={20} />} text="Despedida" to="/despedida" />
    </>
  )
}

