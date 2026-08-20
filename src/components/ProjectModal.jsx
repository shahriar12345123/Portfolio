import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle, Shield, ShoppingBag, BarChart2, Layers, ArrowRight, ArrowLeft, RefreshCw, Sun, Moon } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // State for SaaS Dashboard Demo
  const [dashboardTheme, setDashboardTheme] = useState('dark');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Monthly');
  const [analyticsData, setAnalyticsData] = useState({ revenue: '$145,280', users: '84,912', signups: '1,854' });

  // State for Auth System Demo
  const [authStep, setAuthStep] = useState('login'); // 'login', 'google', 'logged_in'
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [authMessage, setAuthMessage] = useState('');

  // State for E-commerce Demo
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Indigo Peak Watch', price: 129.99, qty: 1 },
    { id: 2, name: 'Amber Glow Lamp', price: 65.00, qty: 1 },
  ]);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'paying', 'success'

  // State for Multi-Step Form Demo
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ fullName: '', email: '', company: '', role: 'Frontend Engineer' });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  // Cart operations
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
  };

  // Multi-step form validate
  const handleFormNext = () => {
    let errors = {};
    if (formStep === 1) {
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    } else if (formStep === 2) {
      if (!formData.company.trim()) errors.company = 'Company name is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    if (formStep < 3) {
      setFormStep(prev => prev + 1);
    } else {
      setFormSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-card max-w-4xl w-full rounded-2xl border border-white/20 shadow-2xl overflow-hidden my-8 relative flex flex-col max-h-[90vh]">

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gray-900/90">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Interactive Prototype Demo</div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>{project.title}</span>
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Interactive Sandbox */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* Project Details Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 font-mono">Tech Stack:</span>
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2">
              <div className="text-xs font-mono text-gray-400">Role: <span className="text-white font-semibold">{project.role}</span></div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold border border-gray-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Source</span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Live Interactive Simulator (Test Features Below)</span>
            </div>
          </div>

          {/* PROJECT 1 DEMO: SaaS Dashboard */}
          {project.id === 'saas-dashboard' && (
            <div className={`p-6 rounded-2xl border transition-all ${dashboardTheme === 'dark' ? 'bg-gray-950 text-white border-white/10' : 'bg-gray-100 text-gray-900 border-gray-300'}`}>

              {/* Dashboard Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-700/40 mb-4">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <BarChart2 className="w-5 h-5 text-blue-500" />
                  <span>SaaS Analytics Live Workspace</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-gray-800 p-1 rounded-lg border border-gray-700 text-xs text-white">
                    {['Daily', 'Weekly', 'Monthly'].map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setSelectedTimeframe(tf)}
                        className={`px-2.5 py-1 rounded ${selectedTimeframe === tf ? 'bg-blue-600 font-semibold' : 'text-gray-400 hover:text-white'}`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setDashboardTheme(dashboardTheme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-lg bg-gray-800 text-yellow-400 border border-gray-700 hover:scale-105 transition-transform"
                    title="Toggle Theme"
                  >
                    {dashboardTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-gray-700" />}
                  </button>
                </div>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                  <div className="text-xs text-gray-400">Total Revenue ({selectedTimeframe})</div>
                  <div className="text-2xl font-bold text-blue-400 mt-1">{selectedTimeframe === 'Daily' ? '$4,850' : selectedTimeframe === 'Weekly' ? '$32,100' : analyticsData.revenue}</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ +14.2% from previous period</div>
                </div>
                <div className="p-4 rounded-xl bg-purple-600/10 border border-purple-500/20">
                  <div className="text-xs text-gray-400">Active Platform Users</div>
                  <div className="text-2xl font-bold text-purple-400 mt-1">{analyticsData.users}</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ +8.1% active load</div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-600/10 border border-emerald-500/20">
                  <div className="text-xs text-gray-400">New Signups</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">{analyticsData.signups}</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ 98% conversion rate</div>
                </div>
              </div>

              {/* Chart Visual Simulation */}
              <div className="p-4 rounded-xl bg-gray-900/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Revenue Trend Growth Chart</span>
                  <span className="text-blue-400 font-mono">Firebase + Express Synced</span>
                </div>
                <div className="h-24 flex items-end justify-between gap-2 pt-4">
                  {[40, 65, 50, 85, 90, 75, 100, 80, 95, 110].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-purple-500 rounded-t transition-all duration-500 hover:opacity-80" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* PROJECT 2 DEMO: Authentication System */}
          {project.id === 'auth-system' && (
            <div className="p-6 rounded-2xl border border-white/10 bg-gray-950 text-white space-y-6">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                  <Shield className="w-5 h-5" />
                  <span>Authentication Portal (Supabase & Firebase Auth Engine)</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono">Status: Secure</span>
              </div>

              {authStep === 'logged_in' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Authenticated Successfully!</h4>
                  <p className="text-xs text-gray-300">Welcome, <span className="text-emerald-300 font-mono">{userEmail || 'user@shahriar-dev.com'}</span>. JWT session token generated and protected routes unlocked.</p>
                  <button
                    onClick={() => {
                      setAuthStep('login');
                      setAuthMessage('');
                    }}
                    className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold"
                  >
                    Log Out & Reset Demo
                  </button>
                </div>
              ) : (
                <div className="max-w-md mx-auto space-y-4 p-4 rounded-xl bg-gray-900 border border-white/10">
                  <h4 className="text-sm font-bold text-white text-center">User Sign In</h4>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-400">Email Address</label>
                      <input
                        type="email"
                        placeholder="demo.user@gmail.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-950 border border-white/10 text-xs text-white"
                      />
                    </div>

                    <button
                      onClick={() => setAuthStep('logged_in')}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold text-xs shadow-md"
                    >
                      Sign In with Email & Password
                    </button>

                    <div className="relative text-center text-xs text-gray-500 my-2">
                      <span className="bg-gray-900 px-2 relative z-10">or</span>
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
                    </div>

                    <button
                      onClick={() => {
                        setUserEmail('google.user@gmail.com');
                        setAuthStep('logged_in');
                      }}
                      className="w-full py-2.5 rounded-lg bg-white text-gray-900 hover:bg-gray-100 font-semibold text-xs flex items-center justify-center gap-2 shadow"
                    >
                      <span className="font-bold text-blue-600">G</span>
                      <span>Sign In with Google (SSO)</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* PROJECT 3 DEMO: E-commerce Website */}
          {project.id === 'ecommerce-website' && (
            <div className="p-6 rounded-2xl border border-white/10 bg-gray-950 text-white space-y-6">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-blue-400">
                  <ShoppingBag className="w-5 h-5" />
                  <span>AuraMarket Storefront & Stripe Payment Checkout</span>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 font-mono">
                  Cart Items ({cartItems.reduce((acc, i) => acc + i.qty, 0)})
                </span>
              </div>

              {checkoutStep === 'paying' ? (
                <div className="p-6 text-center space-y-4">
                  <RefreshCw className="w-10 h-10 text-blue-400 animate-spin mx-auto" />
                  <div className="text-base font-bold">Connecting to Stripe Secure Payment Gateway...</div>
                  <button
                    onClick={() => setCheckoutStep('success')}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-lg"
                  >
                    Simulate Successful Payment ($ {calculateTotal()})
                  </button>
                </div>
              ) : checkoutStep === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Order Confirmed!</h4>
                  <p className="text-xs text-gray-300">Stripe Payment Intent ID: <span className="font-mono text-emerald-400">pi_3M01k82e0004f</span></p>
                  <button
                    onClick={() => {
                      setCheckoutStep('cart');
                      setCartItems([
                        { id: 1, name: 'Indigo Peak Watch', price: 129.99, qty: 1 }
                      ]);
                    }}
                    className="px-4 py-2 rounded-xl bg-gray-800 text-white text-xs font-semibold"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Products Catalog */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="text-xs font-mono text-gray-400">Store Catalog:</div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 1, name: 'Indigo Peak Watch', price: 129.99 },
                        { id: 2, name: 'Amber Glow Lamp', price: 65.00 },
                        { id: 3, name: 'Rose Quartz Speaker', price: 149.50 },
                        { id: 4, name: 'Noir Smart Bottle', price: 89.00 },
                      ].map(prod => (
                        <div key={prod.id} className="p-3 rounded-xl bg-gray-900 border border-white/10 flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">{prod.name}</div>
                            <div className="text-xs text-blue-400 font-mono mt-1">${prod.price}</div>
                          </div>
                          <button
                            onClick={() => addToCart(prod)}
                            className="mt-3 w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold"
                          >
                            + Add to Cart
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shopping Cart Summary */}
                  <div className="md:col-span-5 p-4 rounded-xl bg-gray-900 border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-gray-400 mb-3">Cart Summary:</div>
                      {cartItems.length > 0 ? (
                        <div className="space-y-2">
                          {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between text-xs p-2 rounded bg-gray-950">
                              <div>
                                <span className="font-semibold text-white">{item.name}</span>
                                <div className="text-[10px] text-gray-400 font-mono">${item.price} x {item.qty}</div>
                              </div>
                              <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 text-xs">
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-500 py-4 text-center">Your cart is empty.</p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-800 mt-4 space-y-3">
                      <div className="flex justify-between text-sm font-bold text-white">
                        <span>Total Amount:</span>
                        <span className="text-emerald-400 font-mono">${calculateTotal()}</span>
                      </div>
                      <button
                        disabled={cartItems.length === 0}
                        onClick={() => setCheckoutStep('paying')}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 disabled:opacity-50 text-white font-semibold text-xs shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>Checkout with Stripe</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )}

            </div>
          )}

          {/* PROJECT 4 DEMO: Multi-Step Form */}
          {project.id === 'multistep-form' && (
            <div className="p-6 rounded-2xl border border-white/10 bg-gray-950 text-white space-y-6">

              {/* Form Step Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-purple-400">
                  <Layers className="w-5 h-5" />
                  <span>Onboarding Wizard (Step {formStep} of 3)</span>
                </div>
                <span className="text-xs font-mono text-gray-400">React + Express Validation</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                  style={{ width: `${(formStep / 3) * 100}%` }}
                ></div>
              </div>

              {formSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Onboarding Completed!</h4>
                  <p className="text-xs text-gray-300">Form payload validated and posted to Node.js & MySQL database in &lt; 2 seconds.</p>
                  <button
                    onClick={() => {
                      setFormStep(1);
                      setFormSuccess(false);
                      setFormData({ fullName: '', email: '', company: '', role: 'Frontend Engineer' });
                    }}
                    className="px-4 py-2 rounded-xl bg-gray-800 text-white text-xs font-semibold"
                  >
                    Start New Onboarding
                  </button>
                </div>
              ) : (
                <div className="max-w-lg mx-auto p-4 rounded-xl bg-gray-900 border border-white/10 space-y-4">

                  {formStep === 1 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-white">Step 1: Personal Details</h4>
                      <div>
                        <label className="text-xs text-gray-400">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Shahriar Bin Rifat"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full mt-1 px-3 py-2 rounded-lg bg-gray-950 border ${formErrors.fullName ? 'border-red-500' : 'border-white/10'} text-xs text-white`}
                        />
                        {formErrors.fullName && <p className="text-[10px] text-red-400 mt-1">{formErrors.fullName}</p>}
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Email Address *</label>
                        <input
                          type="email"
                          placeholder="rifat.dev@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full mt-1 px-3 py-2 rounded-lg bg-gray-950 border ${formErrors.email ? 'border-red-500' : 'border-white/10'} text-xs text-white`}
                        />
                        {formErrors.email && <p className="text-[10px] text-red-400 mt-1">{formErrors.email}</p>}
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-white">Step 2: Workspace & Company</h4>
                      <div>
                        <label className="text-xs text-gray-400">Company Name *</label>
                        <input
                          type="text"
                          placeholder="Innovate Tech Solution"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className={`w-full mt-1 px-3 py-2 rounded-lg bg-gray-950 border ${formErrors.company ? 'border-red-500' : 'border-white/10'} text-xs text-white`}
                        />
                        {formErrors.company && <p className="text-[10px] text-red-400 mt-1">{formErrors.company}</p>}
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Your Primary Role</label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-950 border border-white/10 text-xs text-white"
                        >
                          <option value="Frontend Engineer">Frontend Engineer</option>
                          <option value="Full-Stack Developer">Full-Stack Developer</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Project Manager">Project Manager</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-white">Step 3: Summary Confirmation</h4>
                      <div className="p-3 rounded-lg bg-gray-950 text-xs space-y-1 font-mono">
                        <div>Name: <span className="text-blue-400">{formData.fullName}</span></div>
                        <div>Email: <span className="text-blue-400">{formData.email}</span></div>
                        <div>Company: <span className="text-blue-400">{formData.company}</span></div>
                        <div>Role: <span className="text-blue-400">{formData.role}</span></div>
                      </div>
                    </div>
                  )}

                  {/* Form Navigation Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <button
                      disabled={formStep === 1}
                      onClick={() => setFormStep(prev => prev - 1)}
                      className="px-4 py-2 rounded-lg bg-gray-800 disabled:opacity-30 text-white text-xs font-semibold flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>

                    <button
                      onClick={handleFormNext}
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow-md flex items-center gap-1"
                    >
                      {formStep === 3 ? 'Submit Payload' : 'Next Step'} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-gray-900/90 flex items-center justify-between">
          <div className="text-xs text-gray-400">
            Interactive demo compiled for recruiter evaluation.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
          >
            Close Interactive Prototype
          </button>
        </div>

      </div>
    </div>
  );
}
