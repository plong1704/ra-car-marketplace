import React, { useState } from 'react';
import { FaFolder, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Folder() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <li>
                <Link className="" to="/dashboard/folder">
                    <button onClick={() => setIsOpen((prev) => !prev)}
                        className=" text-xs py-3 rounded-lg text-white hover:bg-white/10 w-full flex gap-4 px-4 "
                        type="button"
                        style={{ position: "relative", overflow: "hidden" }}
                    >
                        <FaFolder className='text-2xl' />
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                            Folder
                        </p>
                        {!isOpen ? (
                            <FaCaretDown className='h-8' />
                        ) : (
                            <FaCaretUp className='h-8' />
                        )
                        }
                    </button>
                </Link>
            </li>
        </div>
    );
}

export default Folder;