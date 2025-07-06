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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { get } from "http";
import { Image } from "phosphor-react";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

interface Props {
  image: string | undefined;
  onChange: (image: string, caption?: string) => void;
}

const formSchema = z.object({
  file: z
    .instanceof(File, { message: "Veuillez importer une image" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "La taille maximale est de 2MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Seuls .jpg, .png et .webp sont acceptés",
    }),
  caption: z.string().optional(),
});

function InsertImage({ image, onChange }: Props) {
  const [open, setOpen] = React.useState(false);
  const [preview, setPreview] = React.useState<string | undefined>(image);
  const [imageDescription, setImageDescription] = React.useState<
    string | undefined
  >();

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
      alert("Image enregistrée avec succès !");
      onChange(response.data, imageDescription);
      setOpen(false);
    },
    onError: () => {
      alert("Erreur lors de l'enregistrement de l'image.");
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
  }, [open]);

  return (
    <div>
      <button
        type="button"
        className="p-2 rounded border w-10 h-10 flex justify-center items-center "
        onClick={() => setOpen(true)}
      >
        <Image />
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
            <h2 className="text-2xl font-bold mb-2">Insérer une image</h2>
            <div
              //   onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {preview && (
                <div className="flex justify-center">
                  <img
                    src={preview}
                    alt="Prévisualisation"
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
                  Description (optionnelle)
                </label>
                <input
                  type="text"
                  {...form.register("caption")}
                  placeholder="Légende de l'image"
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
                {uploadImage.isPending ? "Chargement..." : "Insérer l'image"}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default InsertImage;
