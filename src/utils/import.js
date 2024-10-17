import PageNotFound from "../Components/common/PageNotFound.jsx";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import routesLink from "../Routes/Index";
import logo from '/assest/images/logo.png';
import Button from "../Components/common/Button.jsx";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { TbBrandProducthunt } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { PiSignIn, PiWarningOctagon } from "react-icons/pi";
import { AiOutlineTrademark } from "react-icons/ai";
import { useForm } from "react-hook-form"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { LiaBarsSolid } from "react-icons/lia"
import { TfiSearch } from "react-icons/tfi"
import AddPost from "../Auth/admin/AddPost.jsx";
import { useNavigate } from "react-router"
import { auth, getDocs, provider, db, onAuthStateChanged, collection, addDoc, getStorage, ref, uploadBytesResumable, signInWithEmailAndPassword, getDownloadURL, signOut } from "../firebase.js"
import AdminDashboard from '../Auth/admin/AdminDashboard';
import SignInAdmin from "../Auth/admin/SignInAdmin.jsx";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LogOut from "../Auth/admin/LogOut.jsx";
import Carousel from "../Auth/admin/Carousel.jsx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiImageAdd } from "react-icons/bi";
import fetchUserData from "./data.js";
import { PiSignOutThin } from "react-icons/pi";
import { BiMessageAltEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import carouselImg from "./carouselImg.js";
import { MdUploadFile } from "react-icons/md";
import errorImage from "/assest/images/404 error.gif"



export {PiSignOutThin ,errorImage,carouselImg ,MdUploadFile,BiMessageAltEdit ,MdOutlineDelete , getStorage, fetchUserData, getDocs, IoIosAddCircleOutline, BiImageAdd, useRef, Carousel, PiWarningOctagon, provider, db, collection, addDoc, ref, uploadBytesResumable, getDownloadURL, SignInAdmin, LogOut, signOut, MdOutlineEmail, RiLockPasswordLine, signInWithEmailAndPassword, useEffect, AdminDashboard, LiaBarsSolid, TfiSearch, AddPost, useNavigate, onAuthStateChanged, auth, useForm, IoIosCloseCircleOutline, TbBrandProducthunt, FaHome, BiSolidCategory, PiSignIn, AiOutlineTrademark, Home, routesLink, PageNotFound, Header, Footer, logo, Button, NavLink, CiSearch, FaUserCircle, HiBars3BottomRight, IoMdClose, useState }
