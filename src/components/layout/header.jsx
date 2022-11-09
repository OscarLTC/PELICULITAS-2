import { RiMovie2Fill } from 'react-icons/ri'
import { BiHomeAlt, BiWorld, BiUser } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { HiXMark, HiOutlineBars3 } from 'react-icons/hi2'
import { useState } from 'react'
import './header.css'
import { useEffect } from 'react'
export const Header = () => {
    const [options, setOptions] = useState([
        {
            id: 1,
            name: 'Home',
            icon: <BiHomeAlt className='option-icon' />,
            isSelected: true,
        },
        {
            id: 2,
            name: 'Discover',
            icon: <BiWorld className='option-icon' />,
            isSelected: false,
        },
        {
            id: 3,
            name: 'User',
            icon: <BiUser className='option-icon' />,
            isSelected: false,
        },
    ])

    const [icon, setIcon] = useState(false)

    useEffect(() => {
        setOptions(options)
    }, [options])

    return (
        <div className='header'>
            <div className='top-header'>
                <div className='logo'>
                    <RiMovie2Fill />
                    <div> Peliculitas</div>
                </div>
                <div className='searchtop'>
                    <CiSearch className='icon' />
                    <input
                        type='text'
                        className='text'
                        placeholder={'Search'}
                    />
                </div>
                <div className='icons' onClick={(e) => setIcon(!icon)}>
                    {!icon ? (
                        <HiOutlineBars3 className='menu-icon' />
                    ) : (
                        <HiXMark className='menu-icon' />
                    )}
                </div>
                <div className='optionstop'>
                    <ul>
                        {options.map((o) => (
                            <li
                                key={o.id}
                                onClick={() => (o.isSelected = true)}
                                className={
                                    o.isSelected ? 'option-selected' : ''
                                }
                            >
                                <div className='icon-option'>{o.icon}</div>
                                <div className='name-option'>{o.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={icon ? 'menuv' : 'menui'}>
                <div className='options'>
                    <ul>
                        {options.map((o) => (
                            <li
                                key={o.name}
                                onClick={(e) => {
                                    setIcon(!icon)
                                    e.stopPropagation
                                }}
                            >
                                <div className='option-name'>{o.icon}</div>
                                <div className='option-name'>{o.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='search'>
                <CiSearch className='icon' />
                <input type='text' className='text' placeholder={'Search'} />
            </div>
        </div>
    )
}
