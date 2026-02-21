"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, CircularProgress, IconButton, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import { Fragment, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    const response = await axios({
      method: "POST",
      url: "/api/submit_message",
      data: data
    });

    setOpenSnackbar(true);
    reset();
  }

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 relative bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="mb-12 lg:mb-0 lg:pr-8">
              <span className="mb-4 block text-lg font-bold uppercase tracking-wider text-primary">
                Get in Touch
              </span>
              <h2 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                Ready to Transform Your <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Digital Presence?</span>
              </h2>
              <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                Contact us today to discuss your project and discover how Lalshan Solutions can help you achieve your digital goals.
              </p>
            </div>
          </div>

          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="relative">
              {/* Gradient Blob Background */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

              <div
                className="relative rounded-2xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          {...register("Name", { required: true })}
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-xl border border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:bg-[#2C303B] dark:focus:shadow-none"
                          style={errors.Name ? { borderColor: "red" } : {}}
                        />
                        {errors.Name && (
                          <div className="mt-1 text-sm text-red-500">
                            Enter your name
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("Email", { required: true })}
                          placeholder="your.email@example.com"
                          className="w-full rounded-xl border border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:bg-[#2C303B] dark:focus:shadow-none"
                          style={errors.Email ? { borderColor: "red" } : {}}
                        />
                        {errors.Email && (
                          <div className="mt-1 text-sm text-red-500">
                            Enter valid email
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="phone"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Phone (Optional)
                        </label>
                        <input
                          {...register("Phone")}
                          type="text"
                          placeholder="Your phone number"
                          className="w-full rounded-xl border border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:bg-[#2C303B] dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="company"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Company (Optional)
                        </label>
                        <input
                          {...register("Company")}
                          type="text"
                          placeholder="Your company name"
                          className="w-full rounded-xl border border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:bg-[#2C303B] dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Message
                        </label>
                        <textarea
                          {...register("Message", { required: true })}
                          rows={5}
                          placeholder="Tell us about your project and requirements"
                          className="w-full resize-none rounded-xl border border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:bg-[#2C303B] dark:focus:shadow-none"
                          style={errors.Message ? { borderColor: "red" } : {}}
                        ></textarea>
                        {errors.Message && (
                          <div className="mt-1 text-sm text-red-500">
                            Enter your message
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-9 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-1"
                      >
                        {isSubmitting ? (
                          <CircularProgress size={24} sx={{ color: "white" }} />
                        ) : (
                          "Send Message"
                        )}
                      </button>
                      <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={closeSnackbar}
                        message="Message Received"
                        action={action}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
