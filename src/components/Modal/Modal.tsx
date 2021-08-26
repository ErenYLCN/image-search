import React, { useState, useRef, useEffect } from "react";
import { DownloadIcon } from "../DownloadIcon/DownloadIcon";
import union from "../../assets/union.png";
import { motion } from "framer-motion";
import "./Modal.scss";
import { getImageDetails } from "../../API/api";

interface Props {
	open: any;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	image: any;
}

export const Modal = ({ open, setOpen, image }: Props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [imageDetails, setImageDetails] = useState<any>(undefined);
	const [isError, setIsError] = useState(undefined);
	let modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open) {
			const fetchData = async () => {
				setIsLoading(true);
				console.log(image.id);

				const data = await getImageDetails(image.id);
				if (data.message) {
					setIsError(data.message);
					setImageDetails(undefined);
					setIsLoading(false);
				} else {
					setImageDetails(data.data);
					setIsError(undefined);
				}
			};
			fetchData();
		}
	}, [open]);

	useEffect(() => {
		setIsLoading(false);
		console.log(imageDetails);
	}, [imageDetails]);

	useEffect(() => {
		document.addEventListener("mousedown", (event) => {
			if (modalRef.current) {
				if (!modalRef.current.contains(event.target as Node)) {
					setImageDetails(undefined);
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
								className="img-container"
							>
								<img src={image.urls.full} alt={image["alt_description"]} />
								{imageDetails && imageDetails.location.title && (
									<div className="location-info">
										<img src={union} alt="union" className="union-icon" />
										<span className="location-title">
											{imageDetails.location.title.split(",")[0]},
											{imageDetails.location.title.split(",")[1] ||
												"Some Place"}
										</span>
									</div>
								)}
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
								{imageDetails && imageDetails.exif.make && !isLoading && (
									<div className="exif-data">
										<div className="exif-child">
											<span className="exif-title">Shot with: </span>
											<span className="make">{imageDetails!.exif.make} </span>
											<span className="model">
												{imageDetails!.exif.model || "Model"}
											</span>
										</div>
										<div className="split">
											<div className="exif-child">
												<span className="exif-title">Exposure time: </span>
												<span className="model">
													{imageDetails!.exif["exposure_time"] || "Unknown"}
												</span>
											</div>
											<div className="exif-child">
												<span className="exif-title">Aperture: </span>
												<span className="model">
													{imageDetails!.exif["aperture"] || "Unknown"}
												</span>
											</div>
										</div>
										<div className="split">
											<div className="exif-child">
												<span className="exif-title">Focal Length: </span>
												<span className="model">
													{imageDetails!.exif["focal_length"] || "Unknown"}
												</span>
											</div>
											<div className="exif-child">
												<span className="exif-title">ISO: </span>
												<span className="model">
													{imageDetails!.exif["iso"] || "Unknown"}
												</span>
											</div>
										</div>
									</div>
								)}
								{isError && (
									<div className="error">EXIF could not load: {isError}</div>
								)}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</div>
	);
};
