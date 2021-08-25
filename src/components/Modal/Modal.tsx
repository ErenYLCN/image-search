import React, { useRef, useEffect } from "react";
import { DownloadIcon } from "../DownloadIcon/DownloadIcon";
import { motion } from "framer-motion";
import "./Modal.scss";

interface Props {
	open: any;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	image: any;
}

export const Modal = ({ open, setOpen, image }: Props) => {
	let modalRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		document.addEventListener("mousedown", (event) => {
			if (modalRef.current) {
				if (!modalRef.current.contains(event.target as Node)) {
					setOpen(false);
				}
			}
		});
	});

	return (
		<div>
			{open && (
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					className="modal-backdrop"
				>
					<motion.div
						initial={{
							x: "calc(-50%)",
							y: "calc(-50%)",
							scale: 0,
						}}
						animate={{
							scale: 1,
						}}
						className="modal-content-wrapper"
						ref={modalRef}
					>
						<div className="modal-content">
							<motion.div
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
									transition: {
										delay: 0.5,
									},
								}}
							>
								<img src={image.urls.full} alt={image["alt_description"]} />
							</motion.div>
							<div className="image-info">
								<div className="heading">
									<div className="user-info">
										<motion.div
											initial={{
												scale: 0,
											}}
											animate={{
												scale: 1,
												transition: {
													delay: 0.5,
												},
											}}
										>
											<img
												src={image.user["profile_image"].medium}
												alt="profile-pic"
												className="profile-pic"
											/>
										</motion.div>
										<div className="names">
											<div className="user-name">
												{image.user["first_name"]}
											</div>
											<div className="social-name">@{image.user.username}</div>
										</div>
									</div>
									<button className="download-btn">
										<DownloadIcon />
										<div>
											<span className="download">Download</span>
										</div>
									</button>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</div>
	);
};
