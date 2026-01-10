"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="mx-auto w-full max-w-[768px]">
      {/* 上段ヘッダー */}
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="トップページへ戻る">
          <div className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/images/logo/logo.png"
              alt="ロゴ"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </Link>

        <h1 className="text-2xl font-semibold tracking-wide">
          ALOHA GOODIES
        </h1>

        <button
          onClick={() => setOpen(true)}
          aria-label="メニューを開く"
          className="flex h-12 w-12 items-center justify-center"
        >
          <Image
            src="/images/logo/hamburger.png"
            alt=""
            width={48}
            height={48}
            className="object-contain"
          />
        </button>
      </div>

      {/* hero */}
      <div
        className="
          relative
          w-full
          h-[222px]
          overflow-hidden
        "
      >
        <Image
          src="/images/home/header.png"
          alt="hero"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />

        {/* overlay text */}
        {title &&
        <div
          className="
            absolute
            inset-x-0
            bottom-2
            text-center
          "
        >
          <h1
            className="
              text-white
              text-2xl
              font-semibold
              tracking-wide
              drop-shadow
            "
          >
            {title}
          </h1>
        </div>
        }
      </div>

      {/* menu */}  
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}   // 背景タップで閉じる
        >
          <div
            className="absolute right-4 top-4 w-[260px] rounded-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <nav className="mt-4 space-y-2">
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 hover:bg-gray-100"
              >
                全アイテム検索
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 hover:bg-gray-100"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
