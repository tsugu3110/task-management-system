"use client";

import { useState } from "react";

export default function Dashboard() {
  // 入力されたテーマを管理する状態（ステート）
  const [themeInput, setThemeInput] = useState("");

  // 仮の「進行中のテーマ一覧」データ（データ設計を反映）
  const mockThemes = [
    { id: "1", title: "AWSシステム開発", progress: 35 },
    { id: "2", title: "Next.jsマスターへの道", progress: 80 },
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`「${themeInput}」の学習計画をAIが生成します...（ダミー動作）`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">AI学習計画マネージャー</h1>
      </header>

      {/* メインエリア */}
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        
        {/* 新規学習テーマ入力フォーム */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-150">
          <h2 className="text-lg font-semibold mb-3">新しいテーマで学ぶ</h2>
          <form onSubmit={handleGenerate} className="flex gap-3">
            <input
              type="text"
              value={themeInput}
              onChange={(e) => setThemeInput(e.target.value)}
              placeholder="例：AWSでシステム開発を学びたい"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors"
            >
              AIで計画を生成
            </button>
          </form>
        </section>

        {/* 進行中のテーマ一覧 */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">進行中のテーマ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {mockThemes.map((theme) => (
              <div key={theme.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-150 hover:border-blue-300 transition-all cursor-pointer">
                <h3 className="font-bold text-base mb-2">{theme.title}</h3>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>進捗率</span>
                    <span className="font-medium text-gray-700">{theme.progress}%</span>
                  </div>
                  {/* Tailwindで実装するプログレスバー */}
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full transition-all duration-500" 
                      style={{ width: `${theme.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}