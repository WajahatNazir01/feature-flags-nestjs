// import React, { useState, useEffect } from 'react';
// import AddingFlag from './AddingFlag.jsx';

// export default function MainDb({ tenant, onLogout }) {
//   const [flags, setFlags] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // Dynamic environments storage state references
//   const [envIds, setEnvIds] = useState({ dev: null, prod: null });

//   // 1. Core Synchronizer Bootstrap Controller Layer
//   const bootstrapDashboardData = async () => {
//     try {
//       // Step A: Target global tenants array context listing loop
//       const tenantRes = await fetch(`http://localhost:3000/tenants?tenantId=${tenant.id}`);
//       const tenantDataList = await tenantRes.json();
      
//       let devUuid = null;
//       let prodUuid = null;

//       if (Array.isArray(tenantDataList)) {
//         // Find the explicit tenant item matching the active profile id context
//         const matchedTenant = tenantDataList.find(t => String(t.id) === String(tenant.id));
        
//         if (matchedTenant && Array.isArray(matchedTenant.environments)) {
//           const dEnv = matchedTenant.environments.find(e => e.name === 'Development');
//           const pEnv = matchedTenant.environments.find(e => e.name === 'Production');
//           if (dEnv) devUuid = dEnv.id;
//           if (pEnv) prodUuid = pEnv.id;
//         }
//       }

//       setEnvIds({ dev: devUuid, prod: prodUuid });

//       // Step B: Pull raw feature parameter records matrix array
//       const flagsRes = await fetch(`http://localhost:3000/feature-flags?tenantId=${tenant.id}`);
//       const flagsData = await flagsRes.json();
      
//       if (Array.isArray(flagsData)) {
//         setFlags(flagsData);
//       }
//     } catch (err) {
//       console.error("Error processing custom environments initialization arrays stack:", err);
//     }
//   };

//   // 2. Lifecycle Synchronization Setup Execution Hook
//   useEffect(() => {
//     bootstrapDashboardData();

//     // 🔄 Polling channel (Every 2 seconds) for smooth sync with external environments changes
//     const liveSyncInterval = setInterval(() => {
//       bootstrapDashboardData();
//     }, 2000);

//     return () => clearInterval(liveSyncInterval);
//   }, [tenant.id]);

//   // 3. Complete Reliable Payload Switch Toggle Driver Pipeline
//   const handleToggle = async (flagId, envId, currentStatus) => {
//     if (!flagId || !envId) {
//       alert("Aborted: Absolute runtime environment validation parameter key missing!");
//       return;
//     }

//     // Target next target visual switch value state
//     const nextStatus = !currentStatus;

//     // 🟩 STEP A: Instant Force UI State Animation Loop Trigger 
//     setFlags(prevFlags => 
//       prevFlags.map(flag => {
//         if (flag.id === flagId) {
//           const safeStatuses = Array.isArray(flag.statuses) ? flag.statuses : [];
          
//           // Check if status entry already exists for this envId
//           const hasStatusEntry = safeStatuses.some(s => s.environmentId === envId);
          
//           let updatedStatuses;
//           if (hasStatusEntry) {
//             updatedStatuses = safeStatuses.map(status => 
//               status.environmentId === envId ? { ...status, isEnabled: nextStatus } : status
//             );
//           } else {
//             // If the status entry array structural link doesn't exist yet, insert a clean schema reference node
//             updatedStatuses = [...safeStatuses, { environmentId: envId, isEnabled: nextStatus }];
//           }

//           return {
//             ...flag,
//             statuses: updatedStatuses
//           };
//         }
//         return flag;
//       })
//     );

//     // 🟩 STEP B: Transmit Clean Explicit Thunder Client JSON Schema Payload
//     const requestPayload = { 
//       flagId: String(flagId),             
//       environmentId: String(envId),       
//       isEnabled: Boolean(nextStatus)  
//     };

//     console.log("🚀 Blasting Toggle Request Matrix Payload:", requestPayload);

//     try {
//       const response = await fetch('http://localhost:3000/feature-flags/toggle', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestPayload)
//       });

//       if (!response.ok) {
//         throw new Error(`Server execution validation failed with code: ${response.status}`);
//       }
      
//       // Pull fresh data structure silently
//       const syncRes = await fetch(`http://localhost:3000/feature-flags?tenantId=${tenant.id}`);
//       const data = await syncRes.json();
//       if (Array.isArray(data)) {
//         setFlags(data);
//       }
//     } catch (err) {
//       console.error("Sync pipeline tripped, safely resetting rows layout boundaries:", err);
//       bootstrapDashboardData(); 
//     }
//   };

//   return (
//     <div className="matrix-wrapper">
      
//       {/* Top Navbar Section */}
//       <div className="matrix-header">
//         <div>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//             <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff' }}>{tenant.name}</h1>
//             <span style={{ fontSize: '10px', fontWeight: '700', backgroundColor: '#18181b', color: '#a1a1aa', padding: '2px 6px', borderRadius: '4px', border: '1px solid #27272a' }}>
//               CONSOLE
//             </span>
//           </div>
//           <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#71717a', marginTop: '0.5rem' }}>
//             Tenant ID: {tenant.id}
//           </p>
//         </div>
//         <button 
//           onClick={onLogout} 
//           style={{ background: '#18181b', color: '#e4e4e7', border: '1px solid #27272a', padding: '0.5rem 1rem', borderRadius: '0.375rem', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '700' }}
//         >
//           Exit Workspace
//         </button>
//       </div>

//       {/* Feature Flag Metric UI Table Frame */}
//       <table className="matrix-table">
//         <thead>
//           <tr>
//             <th style={{ textAlign: 'left', width: '60%' }}>Feature Parameter Keys</th>
//             <th style={{ textAlign: 'center', width: '20%' }}>Development Space</th>
//             <th style={{ textAlign: 'center', width: '20%' }}>Production Space</th>
//           </tr>
//         </thead>
//         <tbody>
//           {flags.map(flag => {
//             const currentStatuses = Array.isArray(flag.statuses) ? flag.statuses : [];
            
//             // Assign explicit environment ids fallback pulled from the tenants endpoints mapping layer 
//             const finalDevEnvId = envIds.dev;
//             const finalProdEnvId = envIds.prod;

//             // 🟩 HIGHLY ACCURATE TOGGLE STATUS CAPTURING CHECK:
//             // Match via exact environmentId property checks, fallback to named relational values mapping if needed
//             const devStatusRecord = currentStatuses.find(e => 
//               String(e.environmentId) === String(finalDevEnvId) || 
//               e.environment?.name === 'Development' || 
//               e.environmentName === 'Development'
//             );
//             const prodStatusRecord = currentStatuses.find(e => 
//               String(e.environmentId) === String(finalProdEnvId) || 
//               e.environment?.name === 'Production' || 
//               e.environmentName === 'Production'
//             );

//             const isDevOn = devStatusRecord ? Boolean(devStatusRecord.isEnabled) : false;
//             const isProdOn = prodStatusRecord ? Boolean(prodStatusRecord.isEnabled) : false;

//             return (
//               <tr key={flag.id}>
//                 <td>
//                   <div style={{ fontWeight: '700', color: '#ffffff', fontFamily: 'monospace' }}>{flag.key}</div>
//                   <div style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '0.25rem' }}>
//                     {flag.description || 'No descriptive context meta tracking notes found.'}
//                   </div>
//                 </td>
                
//                 {/* DEVELOPMENT AUTOMATED CONVENTIONAL SLIDER SWITCH */}
//                 <td style={{ textAlign: 'center' }}>
//                   <button 
//                     type="button"
//                     onClick={() => handleToggle(flag.id, finalDevEnvId, isDevOn)}
//                     className={`switch-control ${isDevOn ? 'active' : ''}`}
//                     style={{ opacity: finalDevEnvId ? 1 : 0.3, pointerEvents: finalDevEnvId ? 'auto' : 'none' }}
//                     title={`Dev Env ID: ${finalDevEnvId}`}
//                   >
//                     <div className="switch-handle"></div>
//                   </button>
//                 </td>
                
//                 {/* PRODUCTION AUTOMATED CONVENTIONAL SLIDER SWITCH */}
//                 <td style={{ textAlign: 'center' }}>
//                   <button 
//                     type="button"
//                     onClick={() => handleToggle(flag.id, finalProdEnvId, isProdOn)}
//                     className={`switch-control ${isProdOn ? 'active' : ''}`}
//                     style={{ opacity: finalProdEnvId ? 1 : 0.3, pointerEvents: finalProdEnvId ? 'auto' : 'none' }}
//                     title={`Prod Env ID: ${finalProdEnvId}`}
//                   >
//                     <div className="switch-handle"></div>
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
          
//           {flags.length === 0 && (
//             <tr>
//               <td colSpan="3" style={{ textAlign: 'center', padding: '3rem', color: '#3f3f46', fontFamily: 'monospace', fontSize: '0.75rem' }}>
//                 No active runtime target configs tracked. Tap the floating action item bottom right to append.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* FLOATING ACTION OVERLAY CONTROL BUTTON */}
//       <button onClick={() => setIsModalOpen(true)} className="floating-btn">
//         +
//       </button>

//       {/* Small Overlay Module Popup Container */}
//       {isModalOpen && (
//         <AddingFlag 
//           tenantId={tenant.id} 
//           onClose={() => setIsModalOpen(false)} 
//           onCreated={bootstrapDashboardData} 
//         />
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import AddingFlag from './AddingFlag.jsx';

export default function MainDb({ tenant, onLogout }) {
  const [flags, setFlags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [envIds, setEnvIds] = useState({ dev: null, prod: null });
  
  // 🟩 Local UI source of truth to lock the toggle positions independently
  const [localStatuses, setLocalStatuses] = useState({});

  // 1. Core Synchronizer Bootstrap Controller Layer
  const bootstrapDashboardData = async () => {
    try {
      // Step A: Target global tenants registry mapping
      const tenantRes = await fetch(`http://localhost:3000/tenants?tenantId=${tenant.id}`);
      const tenantDataList = await tenantRes.json();
      
      let devUuid = null;
      let prodUuid = null;

      if (Array.isArray(tenantDataList)) {
        const matchedTenant = tenantDataList.find(t => String(t.id) === String(tenant.id));
        if (matchedTenant && Array.isArray(matchedTenant.environments)) {
          const dEnv = matchedTenant.environments.find(e => e.name === 'Development');
          const pEnv = matchedTenant.environments.find(e => e.name === 'Production');
          if (dEnv) devUuid = dEnv.id;
          if (pEnv) prodUuid = pEnv.id;
        }
      }
      setEnvIds({ dev: devUuid, prod: prodUuid });

      // Step B: Pull feature flag records matrix array
      const flagsRes = await fetch(`http://localhost:3000/feature-flags?tenantId=${tenant.id}`);
      const flagsData = await flagsRes.json();
      
      if (Array.isArray(flagsData)) {
        setFlags(flagsData);
        
        // 🟩 Sync local UI state matrix ONLY if it hasn't been interacted with yet
        setLocalStatuses(prev => {
          const updated = { ...prev };
          flagsData.forEach(flag => {
            const safeStatuses = Array.isArray(flag.statuses) ? flag.statuses : [];
            safeStatuses.forEach(s => {
              const storageKey = `${flag.id}-${s.environmentId}`;
              // Only pull from server if user hasn't toggled it manually in this session
              if (updated[storageKey] === undefined) {
                updated[storageKey] = Boolean(s.isEnabled);
              }
            });
          });
          return updated;
        });
      }
    } catch (err) {
      console.error("Error processing environments initialization stack:", err);
    }
  };

  // 2. Lifecycle Synchronization Setup Execution Hook
  useEffect(() => {
    bootstrapDashboardData();

    // 🔄 Background polling sync every 2 seconds matching external clients changes safely
    const liveSyncInterval = setInterval(() => {
      bootstrapDashboardData();
    }, 2000);

    return () => clearInterval(liveSyncInterval);
  }, [tenant.id]);

  // 3. Complete Reliable Payload Switch Toggle Driver Pipeline
  const handleToggle = async (flagId, envId, currentStatus) => {
    if (!flagId || !envId) {
      alert("Aborted: Absolute runtime environment validation parameter key missing!");
      return;
    }

    const nextStatus = !currentStatus;
    const storageKey = `${flagId}-${envId}`;

    // 🟩 STEP A: Force local UI block state immediately (Locks position, cannot flicker!)
    setLocalStatuses(prev => ({
      ...prev,
      [storageKey]: nextStatus
    }));

    // 🟩 STEP B: Transmit Clean Explicit Thunder Client JSON Schema Payload
    const requestPayload = { 
      flagId: String(flagId),             
      environmentId: String(envId),       
      isEnabled: Boolean(nextStatus)  
    };

    console.log("🚀 Blasting Toggle Request Matrix Payload:", requestPayload);

    try {
      const response = await fetch('http://localhost:3000/feature-flags/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload)
      });

      if (!response.ok) {
        throw new Error(`Server execution validation failed with code: ${response.status}`);
      }

      // Explicitly tell backend to sync up, but local state remains locked
      const flagsRes = await fetch(`http://localhost:3000/feature-flags?tenantId=${tenant.id}`);
      const flagsData = await flagsRes.json();
      if (Array.isArray(flagsData)) {
        setFlags(flagsData);
      }
    } catch (err) {
      console.error("Sync pipeline tripped, reverting local switch positioning state:", err);
      // Revert if connection breaks completely
      setLocalStatuses(prev => ({
        ...prev,
        [storageKey]: currentStatus
      }));
    }
  };

  return (
    <div className="matrix-wrapper">
      
      {/* Top Navbar Section */}
      <div className="matrix-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff' }}>{tenant.name}</h1>
            <span style={{ fontSize: '10px', fontWeight: '700', backgroundColor: '#18181b', color: '#a1a1aa', padding: '2px 6px', borderRadius: '4px', border: '1px solid #27272a' }}>
              CONSOLE
            </span>
          </div>
          <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#71717a', marginTop: '0.5rem' }}>
            Tenant ID: {tenant.id}
          </p>
        </div>
        <button 
          onClick={onLogout} 
          style={{ background: '#18181b', color: '#e4e4e7', border: '1px solid #27272a', padding: '0.5rem 1rem', borderRadius: '0.375rem', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '700' }}
        >
          Exit Workspace
        </button>
      </div>

      {/* Feature Flag Metric UI Table Frame */}
      <table className="matrix-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'left', width: '60%' }}>Feature Parameter Keys</th>
            <th style={{ textAlign: 'center', width: '20%' }}>Development Space</th>
            <th style={{ textAlign: 'center', width: '20%' }}>Production Space</th>
          </tr>
        </thead>
        <tbody>
          {flags.map(flag => {
            const finalDevEnvId = envIds.dev;
            const finalProdEnvId = envIds.prod;

            // 🟩 READ DIRECTLY FROM LOCAL LOCK STATE MATRIX
            const devKey = `${flag.id}-${finalDevEnvId}`;
            const prodKey = `${flag.id}-${finalProdEnvId}`;

            // Read the local session map value, fallback to database record properties if blank
            const isDevOn = localStatuses[devKey] !== undefined ? localStatuses[devKey] : false;
            const isProdOn = localStatuses[prodKey] !== undefined ? localStatuses[prodKey] : false;

            return (
              <tr key={flag.id}>
                <td>
                  <div style={{ fontWeight: '700', color: '#ffffff', fontFamily: 'monospace' }}>{flag.key}</div>
                  <div style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '0.25rem' }}>
                    {flag.description || 'No descriptive context meta tracking notes found.'}
                  </div>
                </td>
                
                {/* DEVELOPMENT AUTOMATED CONVENTIONAL SLIDER SWITCH */}
                <td style={{ textAlign: 'center' }}>
                  <button 
                    type="button"
                    onClick={() => handleToggle(flag.id, finalDevEnvId, isDevOn)}
                    className={`switch-control ${isDevOn ? 'active' : ''}`}
                    style={{ opacity: finalDevEnvId ? 1 : 0.3, pointerEvents: finalDevEnvId ? 'auto' : 'none' }}
                    title={`Dev Env ID: ${finalDevEnvId}`}
                  >
                    <div className="switch-handle"></div>
                  </button>
                </td>
                
                {/* PRODUCTION AUTOMATED CONVENTIONAL SLIDER SWITCH */}
                <td style={{ textAlign: 'center' }}>
                  <button 
                    type="button"
                    onClick={() => handleToggle(flag.id, finalProdEnvId, isProdOn)}
                    className={`switch-control ${isProdOn ? 'active' : ''}`}
                    style={{ opacity: finalProdEnvId ? 1 : 0.3, pointerEvents: finalProdEnvId ? 'auto' : 'none' }}
                    title={`Prod Env ID: ${finalProdEnvId}`}
                  >
                    <div className="switch-handle"></div>
                  </button>
                </td>
              </tr>
            );
          })}
          
          {flags.length === 0 && (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center', padding: '3rem', color: '#3f3f46', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                No active runtime target configs tracked. Tap the floating action item bottom right to append.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* FLOATING ACTION OVERLAY CONTROL BUTTON */}
      <button onClick={() => setIsModalOpen(true)} className="floating-btn">
        +
      </button>

      {/* Small Overlay Module Popup Container */}
      {isModalOpen && (
        <AddingFlag 
          tenantId={tenant.id} 
          onClose={() => setIsModalOpen(false)} 
          onCreated={bootstrapDashboardData} 
        />
      )}
    </div>
  );
}