"use client";

import { useState } from "react";
import Link from "next/link";

export default function ThemeDetail() {
  // 全体の進捗率（仮）
  const totalProgress = 35;
  const totalTasks = 7;
  const completedTasks = 2;

  // 仮の3階層データ（AIが生成した想定のデータ構造）
  const [items, setItems] = useState([
    {
      id: "item-1",
      title: "AWS基礎",
      tasks: [
        { id: "task-1", title: "AWSサービス概要の理解", duration: 30, dueDate: "2026-07-10", status: "done", progress: 100 },
        { id: "task-2", title: "IAMユーザーの作成とMFA設定", duration: 45, dueDate: "2026-07-12", status: "done", progress: 100 },
        { id: "task-3", title: "IAMロールとポリシーの違いを理解する", duration: 60, dueDate: "2026-07-15", status: "doing", progress: 40 },
      ],
    },
    {
      id: "item-2",
      title: "サーバーレス",
      tasks: [
        { id: "task-4", title: "Lambda関数の作成と基本設定", duration: 60, dueDate: "2026-07-20", status: "pending", progress: 0 },
        { id: "task-5", title: "API GatewayとLambdaの連携テスト", duration: 90, dueDate: "2026-07-25", status: "pending", progress: 0 },
      ],
    },
  ]);

  // 状態（ステータス）に応じたバッジの色を返す関数
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "done": return "bg-green-100 text-green-800";
      case "doing": return "bg-yellow-100 text-yellow-800";
      case "hold": return "bg-gray-100 text-gray-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          <Link href="/">AI学習計画マネージャー</Link>
        </h1>
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
          ← ダッシュボードへ戻る
        </Link>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto p-6 space-y-6">
        
        {/* テーマ情報・全体進捗 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-150 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-500 tracking-wider uppercase">学習テーマ</span>
            <h2 className="text-2xl font-bold mt-1">AWSシステム開発</h2>
          </div>
          <div className="w-full md:w-64 space-y-1">
            <div className="flex justify-between text-sm text-gray-500">
              <span>進捗率 ({completedTasks}/{totalTasks} タスク)</span>
              <span className="font-bold text-gray-700">{totalProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full transition-all" style={{ width: `${totalProgress}%` }} />
            </div>
          </div>
        </section>

        {/* 3階層の学習計画リスト */}
        <section className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* 階層2：学習項目ヘッダー */}
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-lg text-gray-800">📂 {item.title}</h3>
                <span className="text-xs text-gray-500 font-medium">{item.tasks.length} タスク</span>
              </div>

              {/* 階層3：タスク一覧 */}
              <div className="divide-y divide-gray-150">
                {item.tasks.map((task) => (
                  <div key={task.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${getStatusBadge(task.status)}`}>
                          {task.status === "done" ? "完了" : task.status === "doing" ? "進行中" : "未着手"}
                        </span>
                        <h4 className="font-semibold text-base text-gray-800">{task.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400">想定時間: {task.duration}分</p>
                    </div>

                    {/* ユーザー操作・期限入力エリア */}
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <div className="text-left sm:text-right">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">期限日</label>
                        <input 
                          type="date" 
                          value={task.dueDate}
                          className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="text-left sm:text-right">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">進捗率</label>
                        <span className="text-sm font-semibold text-gray-700">{task.progress}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}