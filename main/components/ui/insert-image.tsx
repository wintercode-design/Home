// 'use client'
// import axiosConfig from '@/api/api';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useMutation } from '@tanstack/react-query';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
// import { Input } from './ui/input';
// import { toast } from '@/hooks/use-toast';
// import React from 'react'
// import axios from 'axios';
// import Button from './EditButton';

"use client";
// import { useTranslations } from "@/hooks/useMessages";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { Image } from "phosphor-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

interface Props {
  image: string | undefined;
  onChange: (image: string, caption?: string) => void;
}

function InsertImage({ image, onChange }: Props) {
  const t = useTranslations("Common");
  const [open, setOpen] = React.useState(false);
  const [preview, setPreview] = React.useState<string | undefined>(image);
  const [imageDescription, setImageDescription] = React.useState<
    string | undefined
  >();

  const formSchema = z.object({
    file: z
      .instanceof(File, { message: t("imageUpload.pleaseImportImage") })
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: t("imageUpload.maxSize2MB"),
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: t("imageUpload.onlyJpgPngWebp"),
      }),
    caption: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const uploadImage = useMutation({
    mutationFn: (data: z.infer<typeof formSchema>) => {
      //   const formData = new FormData();
      //   formData.append("file", data.file);
      return axios.post<string>(
        "http://slim.localhost/api/image/url",
        {
          file: data.file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: (response) => {
      alert(t("imageUpload.successMessage"));
      onChange(response.data, imageDescription);
      setOpen(false);
    },
    onError: () => {
      alert(t("imageUpload.errorMessage"));
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    uploadImage.mutate(data);
    setImageDescription(data.caption);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    form.setValue("file", file);
  };

  React.useEffect(() => {
    if (!open) {
      form.reset();
      setPreview(undefined);
    }
  }, [open, form]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
      className="...your existing container classes..."
    >
      <div>
        <button
          type="button"
          className="p-2 rounded border w-10 h-10 flex justify-center items-center "
          onClick={() => setOpen(true)}
        >
          <Image alt="some image" />
        </button>

        {open && (
          <dialog className="fixed left-1/2 top-1/2 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => setOpen(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-2">
                {t("imageUpload.insertImage")}
              </h2>
              <div
                //   onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {preview && (
                  <div className="flex justify-center">
                    <img
                      src={preview}
                      alt={t("imageUpload.preview")}
                      className="h-32 w-full object-cover"
                    />
                  </div>
                )}

                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full"
                  />
                  {form.formState.errors.file && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.file.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    {t("imageUpload.descriptionOptional")}
                  </label>
                  <input
                    type="text"
                    {...form.register("caption")}
                    placeholder={t("imageUpload.imageCaption")}
                    className="border rounded w-full p-2"
                  />
                  {form.formState.errors.caption && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.caption.message}
                    </p>
                  )}
                </div>

                <button
                  // type="submit"
                  onClick={() => onSubmit(form.getValues())}
                  disabled={uploadImage.isPending}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  {uploadImage.isPending
                    ? t("imageUpload.loading")
                    : t("imageUpload.insertImage")}
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </motion.div>
  );
}

export default InsertImage;
